import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HangmanState } from '../store/reducers';
import { getQuote } from '../api/getQuote';
import { IQuote } from '../models/IQuote';
import { Button } from '../components/Button';
import { setGamePhaseAction } from '../store/actions';
import { postResult } from '../api/postResult';
import { uniqueLettersArray } from '../helpers/uniqueLettersArray';

export const Play = () => {
  const store = useSelector((state: any) => state.hangman as HangmanState);
  const dispatch = useDispatch();

  const [gameKey, setGameKey] = useState(0);
  const [quoteData, setQuoteData] = useState<IQuote>();
  const [maskedQuote, setMaskedQuote] = useState<string>('');
  const [errors, setErrors] = useState<number>(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [uniqueLetters, setUniqueLetters] = useState<string[]>();
  const [startTime, setStartTime] = useState<any>(0);

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.length <= 1 && /^[a-zA-Z]*$/.test(newValue)) {
      setInputValue(newValue);
    }
  };

  useEffect(() => {
    getQuote().then((q) => {
      setErrors(0);
      setGuessedLetters([]);
      setInputValue('');
      setQuoteData(q);
      setUniqueLetters(uniqueLettersArray(q.content));
      const masked = q.content.replace(/[a-zA-Z]/g, '-');
      setMaskedQuote(masked);
      setStartTime(Date.now());
    });
  }, [gameKey]);

  const checkLetter = () => {
    const lowerCaseInput = inputValue.toLowerCase();

    if (quoteData?.content!.toLowerCase().includes(lowerCaseInput)) {
      setGuessedLetters([...guessedLetters, lowerCaseInput]);
    } else {
      setErrors(errors + 1);
    }

    let updatedMaskedQuote = maskedQuote
      .split('')
      .map((char, i) =>
        quoteData?.content![i].toLowerCase() === lowerCaseInput
          ? quoteData?.content![i]
          : char
      )
      .join('');

    setMaskedQuote(updatedMaskedQuote);
  };

  useEffect(() => {
    if (uniqueLetters?.length === guessedLetters.length) {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      postResult({
        quoteId: quoteData!._id,
        length: quoteData!.length,
        uniqueCharacters: uniqueLetters.length,
        userName: store.playerName,
        errors: errors,
        duration: elapsedTime,
      }).then((res) => {
        dispatch(setGamePhaseAction('HIGHSCORES'));
      });
    }
  }, [guessedLetters]);

  return (
    <>
      <h1>Play</h1>
      <h2>Hello {store.playerName}</h2>
      <br />
      <h1>{maskedQuote}</h1>
      <p>Errors: {errors}</p>
      <br></br>
      <br></br>
      <div className="d-flex align-items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control me-3"
          placeholder="Input letter"
        />
        <Button
          text="Submit"
          onClick={() => {
            checkLetter();
          }}
          isDisabled={inputValue === ''}
        />
      </div>
      <br />
      <Button
        text="Highscores"
        onClick={() => {
          dispatch(setGamePhaseAction('HIGHSCORES'));
        }}
      />
      <br />
      <Button
        text="Restart"
        onClick={() => {
          setGameKey((prevKey) => prevKey + 1);
        }}
      />
    </>
  );
};
