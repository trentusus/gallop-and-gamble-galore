import React, { useState } from 'react';
import { Race, Horse, BetType, Bet } from '../types';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';

interface BettingFormProps {
  race: Race;
  horse: Horse;
  betType: BetType;
  onPlaceBet: (bet: Bet, x: number, y: number) => void;
  onCancel: () => void;
}

const BettingForm: React.FC<BettingFormProps> = ({ 
  race, 
  horse, 
  betType, 
  onPlaceBet, 
  onCancel 
}) => {
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [stake, setStake] = useState<number>(10);
  const odds = betType === 'win' ? horse.winOdds : horse.placeOdds;
  const potentialWinnings = stake * odds;

  const handleStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setStake(value);
    } else {
      setStake(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (stake <= 0) return;

    const bet: Bet = {
      id: Date.now(),
      raceId: race.id,
      raceName: race.name,
      horseId: horse.id,
      horseName: horse.name,
      stake: stake,
      odds: odds,
      betType: betType,
      potentialWinnings: potentialWinnings
    };

    onPlaceBet(bet, e.clientX, e.clientY);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-racing-brown">Place Your Bet</h3>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Race:</span>
          <span className="font-medium">{race.name}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Horse:</span>
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: horse.silkColor }}></div>
            <span className="font-medium">{horse.name}</span>
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Bet Type:</span>
          <span className="font-medium capitalize">{betType}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Odds:</span>
          <span className="font-medium">{odds.toFixed(2)}</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="stake" className="block text-gray-700 mb-2">Stake ($)</label>
          <input
            type="number"
            id="stake"
            value={stake}
            onChange={handleStakeChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-racing-gold"
            min="1"
            step="1"
          />
        </div>
        
        <div className="bg-racing-tan p-4 rounded-md mb-6">
          <div className="flex justify-between text-racing-brown">
            <span className="font-medium">Potential Winnings:</span>
            <span className="font-bold">${potentialWinnings.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="flex space-x-4">
        <button
          type="button" // prevent form submission from triggering default behavior
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isLoggedIn) {
              setShowLoginModal(true);
              return;
            }
            if (stake <= 0) return;

            const bet: Bet = {
              id: Date.now(),
              raceId: race.id,
              raceName: race.name,
              horseId: horse.id,
              horseName: horse.name,
              stake: stake,
              odds: odds,
              betType: betType,
              potentialWinnings: potentialWinnings
            };
            const x = e.clientX;
            const y = e.clientY;

            onPlaceBet(bet, x, y);
          }}
          className="bg-racing-green hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-full transition-colors"
        >
          Place Bet
        </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </div>
  );
};

export default BettingForm;
