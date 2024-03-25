export interface IHighscore {
  id: number;
  quoteId: string;
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
  score?: number;
  smarterCalculatedScore?: number;
}
