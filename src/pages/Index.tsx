
import React, { useState } from 'react';
import { Race, Horse, BetType, Bet } from '../types';
import { getUpcomingRaces } from '../data/races';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RaceDetails from '../components/RaceDetails';
import BettingForm from '../components/BettingForm';
import BetSlip from '../components/BetSlip';
import { trackHorseRaceBet, createHorseRaceBet, createClickCoordinates } from '../snowtype/snowplow.ts';
import { trackPageView } from '@snowplow/browser-tracker';

enum AppState {
  VIEWING_RACES,
  PLACING_BET,
  BET_CONFIRMED
}

enum AppStateStrings {
  VIEWING_RACES = 'VIEWING_RACES',
  PLACING_BET = 'PLACING_BET',
  BET_CONFIRMED = 'BET_CONFIRMED'
}

const Index = () => {
  const [selectedRace, setSelectedRace] = useState<Race | null>(getUpcomingRaces()[0] || null);
  const [selectedHorse, setSelectedHorse] = useState<Horse | null>(null);
  const [selectedBetType, setSelectedBetType] = useState<BetType | null>(null);
  const [placedBet, setPlacedBet] = useState<Bet | null>(null);
  const [appState, setAppState] = useState<AppState>(AppState.VIEWING_RACES);

  // Handle race selection from sidebar
  const handleSelectRace = (race: Race) => {
    setSelectedRace(race);
    // Reset other selections when changing races
    setSelectedHorse(null);
    setSelectedBetType(null);
    setAppState(AppState.VIEWING_RACES);
    trackPageView({
      context: [{
        schema: 'iglu:com.snplow.sales.aws/horse_race_screen/jsonschema/1-1-0',
        data: {
          screen_name: AppStateStrings.VIEWING_RACES
        }
      }]
    });
  };

  // Handle horse and bet type selection
  const handleSelectHorse = (horse: Horse, betType: BetType) => {
    setSelectedHorse(horse);
    setSelectedBetType(betType);
    setAppState(AppState.PLACING_BET);
    trackPageView({
      context: [{
        schema: 'iglu:com.snplow.sales.aws/horse_race_screen/jsonschema/1-1-0',
        data: {
          screen_name: AppStateStrings.PLACING_BET
        }
      }]
    });
  };

  // Handle bet placement
  const handlePlaceBet = (bet: Bet, clickX: number, clickY: number) => {
    const horse_bet = createHorseRaceBet({
      bet_type: selectedBetType,
      horse: selectedHorse.name,
      jockey: selectedHorse.jockey,
      trainer: selectedHorse.trainer,
      race_name: selectedRace.name,
      race_location: selectedRace.venue,
      // convert selectedRace.distance string to number
      race_distance: parseInt(selectedRace.distance),
      // convert selectedRace.startTime string to Date
      race_start_time: new Date(selectedRace.startTime),
      place_odds: selectedHorse.placeOdds,
      win_odds: selectedHorse.winOdds,
      horse_age: selectedHorse.age,
      horse_weight: selectedHorse.weight,
      bet_amount: bet.stake,
      potential_winnings: bet.potentialWinnings
    });
    
    const clickCoordinates = createClickCoordinates({
      x: clickX,
      y: clickY,
    });
  
    trackHorseRaceBet({
      context: [horse_bet, clickCoordinates]
    });

    setPlacedBet(bet);
    setAppState(AppState.BET_CONFIRMED);
    trackPageView({
      context: [{
        schema: 'iglu:com.snplow.sales.aws/horse_race_screen/jsonschema/1-1-0',
        data: {
          screen_name: AppStateStrings.BET_CONFIRMED
        }
      }]
    });
  };

  // Handle cancellation of bet
  const handleCancelBet = () => {
    setSelectedHorse(null);
    setSelectedBetType(null);
    setAppState(AppState.VIEWING_RACES);
    trackPageView({
      context: [{
        schema: 'iglu:com.snplow.sales.aws/horse_race_screen/jsonschema/1-1-0',
        data: {
          screen_name: AppStateStrings.VIEWING_RACES
        }
      }]
    });
  };

  // Handle back to home from bet confirmation
  const handleBackToHome = () => {
    setSelectedHorse(null);
    setSelectedBetType(null);
    setPlacedBet(null);
    setAppState(AppState.VIEWING_RACES);
    trackPageView({
      context: [{
        schema: 'iglu:com.snplow.sales.aws/horse_race_screen/jsonschema/1-1-0',
        data: {
          screen_name: AppStateStrings.VIEWING_RACES
        }
      }]
    });
  };

  // Render main content based on app state
  const renderMainContent = () => {
    switch (appState) {
      case AppState.PLACING_BET:
        if (!selectedRace || !selectedHorse || !selectedBetType) return null;
        return (
          <BettingForm
            race={selectedRace}
            horse={selectedHorse}
            betType={selectedBetType}
            onPlaceBet={handlePlaceBet}
            onCancel={handleCancelBet}
          />
        );
      case AppState.BET_CONFIRMED:
        if (!placedBet) return null;
        return (
          <BetSlip
            bet={placedBet}
            onBackToHome={handleBackToHome}
          />
        );
      case AppState.VIEWING_RACES:
      default:
        return selectedRace ? (
          <RaceDetails
            race={selectedRace}
            onSelectHorse={handleSelectHorse}
          />
        ) : (
          <div className="text-center p-10">
            <p className="text-xl text-gray-600">Please select a race from the sidebar</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onSelectRace={handleSelectRace} selectedRaceId={selectedRace?.id || null} />
        <main className="flex-1 overflow-y-auto p-6 bg-racing-tan/30">
          <div className="container mx-auto">
            {renderMainContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
