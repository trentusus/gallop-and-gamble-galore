
import React from 'react';
import { Bet } from '../types';

interface BetSlipProps {
  bet: Bet;
  onBackToHome: () => void;
}

const BetSlip: React.FC<BetSlipProps> = ({ bet, onBackToHome }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="inline-block p-3 rounded-full bg-green-100 mb-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-racing-green" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-racing-brown">Bet Placed Successfully!</h3>
        <p className="text-gray-600 mt-1">Your bet has been confirmed</p>
      </div>

      <div className="bg-racing-tan rounded-lg p-4 mb-6">
        <h4 className="font-bold text-racing-brown text-lg mb-2">Bet Details</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-700">Race:</span>
            <span className="font-medium">{bet.raceName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Horse:</span>
            <span className="font-medium">{bet.horseName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Bet Type:</span>
            <span className="font-medium capitalize">{bet.betType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Stake:</span>
            <span className="font-medium">${bet.stake.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Odds:</span>
            <span className="font-medium">{bet.odds.toFixed(2)}</span>
          </div>
          <div className="pt-2 border-t border-racing-brown/20">
            <div className="flex justify-between font-bold">
              <span className="text-racing-brown">Potential Winnings:</span>
              <span className="text-racing-green">${bet.potentialWinnings.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onBackToHome}
          className="bg-racing-gold hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition-colors"
        >
          Back to Races
        </button>
      </div>
    </div>
  );
};

export default BetSlip;
