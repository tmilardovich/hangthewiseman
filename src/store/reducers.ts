import { SET_PLAYER_NAME, SET_GAME_PHASE, SET_SECRET_QUOTE } from './actions';

export interface HangmanState {
  playerName: string;
  secretWord: string;
  gamePhase: string;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: HangmanState = {
  playerName: '',
  secretWord: '',
  gamePhase: 'START', // START, PLAY, HIGHSCORES
};

export const hangmanReducer = (
  state = initialState,
  action: Action
): HangmanState => {
  switch (action.type) {
    case SET_PLAYER_NAME:
      return { ...state, playerName: action.payload };
    case SET_SECRET_QUOTE:
      return { ...state, secretWord: action.payload };
    case SET_GAME_PHASE:
      return { ...state, gamePhase: action.payload };
    default:
      return state;
  }
};
