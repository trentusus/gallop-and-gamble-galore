
import React from 'react';
import { Race, Horse, BetType } from '../types';

interface RaceDetailsProps {
  race: Race;
  onSelectHorse: (horse: Horse, betType: BetType) => void;
}

const RaceDetails: React.FC<RaceDetailsProps> = ({ race, onSelectHorse }) => {
  // Format time to display
  const formatRaceTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-racing-brown mb-2">{race.name}</h2>
        <div className="text-gray-600">
          <p className="text-lg">{race.venue} • {race.distance}</p>
          <p className="text-lg font-medium">Start: {formatRaceTime(race.startTime)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-racing-tan text-racing-brown">
                <th className="py-3 px-4 text-left font-serif">Horse</th>
                <th className="py-3 px-4 text-center font-serif">Jockey/Trainer</th>
                <th className="py-3 px-4 text-center font-serif">Age/Weight</th>
                <th className="py-3 px-4 text-center font-serif">Win Odds</th>
                <th className="py-3 px-4 text-center font-serif">Place Odds</th>
                <th className="py-3 px-4 text-center font-serif">Actions</th>
              </tr>
            </thead>
            <tbody>
              {race.horses.map((horse) => (
                <tr key={horse.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full mr-3" style={{ backgroundColor: horse.silkColor }}></div>
                      <span className="font-medium">{horse.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    <div>{horse.jockey}</div>
                    <div className="text-gray-500">{horse.trainer}</div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {horse.age}yo • {horse.weight}kg
                  </td>
                  <td className="py-3 px-4 text-center font-medium text-racing-brown">
                    {horse.winOdds.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center font-medium text-racing-brown">
                    {horse.placeOdds.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2 justify-center">
                      <button 
                        onClick={() => onSelectHorse(horse, 'win')}
                        className="bg-racing-green hover:bg-green-800 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Win
                      </button>
                      <button 
                        onClick={() => onSelectHorse(horse, 'place')}
                        className="bg-racing-brown hover:bg-racing-light-brown text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Place
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RaceDetails;
