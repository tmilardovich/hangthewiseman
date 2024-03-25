import { configureStore, Reducer, Action } from '@reduxjs/toolkit';
import { hangmanReducer, HangmanState } from './reducers';

export const store = configureStore({
    reducer: { hangman: hangmanReducer as Reducer<HangmanState | undefined, Action> },
});
