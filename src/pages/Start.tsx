import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { useDispatch } from 'react-redux';
import { setGamePhaseAction, setPlayerNameAction } from '../store/actions';

export const Start = () => {
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState('');

  const startGame = () => {
    dispatch(setPlayerNameAction(playerName));
    dispatch(setGamePhaseAction('PLAY'));
  };

  return (
    <>
      <h1>Hang the wise man</h1>
      <h2>Enter your name</h2>
      <br />

      <div className="col-md-6 mx-auto">
        <InputField value={playerName} onChange={setPlayerName} />
        <br />
        <Button
          text="Play game"
          onClick={() => startGame()}
          isDisabled={playerName === ''}
        />
      </div>
    </>
  );
};
