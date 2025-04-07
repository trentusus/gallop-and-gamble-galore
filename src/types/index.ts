
export interface Horse {
  id: number;
  name: string;
  jockey: string;
  trainer: string;
  age: number;
  weight: number;
  winOdds: number; // Decimal odds for winning
  placeOdds: number; // Decimal odds for placing
  silkColor: string; // Color used for display
}

export interface Race {
  id: number;
  name: string;
  venue: string;
  distance: string;
  startTime: string;
  status: 'upcoming' | 'live' | 'completed';
  horses: Horse[];
}

export type BetType = 'win' | 'place';

export interface Bet {
  id: number;
  raceId: number;
  raceName: string;
  horseId: number;
  horseName: string;
  stake: number;
  odds: number;
  betType: BetType;
  potentialWinnings: number;
}
