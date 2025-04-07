
import React from 'react';
import { Race } from '../types';
import { getUpcomingRaces } from '../data/races';

interface SidebarProps {
  onSelectRace: (race: Race) => void;
  selectedRaceId: number | null;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectRace, selectedRaceId }) => {
  const upcomingRaces = getUpcomingRaces();

  // Format time to HH:MM
  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Calculate minutes until race starts
  const getTimeUntil = (dateString: string): string => {
    const now = new Date();
    const raceTime = new Date(dateString);
    const diffMs = raceTime.getTime() - now.getTime();
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 0) return 'Started';
    if (diffMins === 0) return 'Starting now';
    if (diffMins < 60) return `${diffMins}m`;
    
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <aside className="bg-racing-brown text-white w-64 flex-shrink-0 h-screen overflow-y-auto sidebar-scrollbar">
      <div className="p-4 border-b border-racing-light-brown">
        <h2 className="text-xl font-serif font-bold text-racing-tan">Upcoming Races</h2>
      </div>
      <div>
        {upcomingRaces.map((race) => (
          <div 
            key={race.id} 
            className={`p-4 border-b border-racing-light-brown hover:bg-racing-light-brown cursor-pointer transition-colors ${selectedRaceId === race.id ? 'bg-racing-light-brown' : ''}`}
            onClick={() => onSelectRace(race)}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-racing-gold font-medium">{formatTime(race.startTime)}</span>
              <span className="text-sm bg-racing-green px-2 py-1 rounded-full">
                {getTimeUntil(race.startTime)}
              </span>
            </div>
            <h3 className="font-serif font-bold">{race.name}</h3>
            <div className="text-sm text-racing-tan opacity-80 mt-1">
              <div>{race.venue}</div>
              <div>{race.distance}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
