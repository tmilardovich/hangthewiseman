export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_SECRET_QUOTE = 'SET_SECRET_WORD';
export const SET_GAME_PHASE = 'SET_GAME_PHASE';

export const setPlayerNameAction = (name: string) => ({
  type: SET_PLAYER_NAME,
  payload: name,
});

export const setSecretQuoteAction = (quote: string) => ({
  type: SET_SECRET_QUOTE,
  payload: quote,
});

export const setGamePhaseAction = (phase: string) => ({
  type: SET_GAME_PHASE,
  payload: phase,
});
