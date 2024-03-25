import { useEffect, useState } from 'react';
import { getHighscores } from '../api/getHighscores';
import { IHighscore } from '../models/IHighscore';
import { Button } from '../components/Button';
import { useDispatch } from 'react-redux';
import { setGamePhaseAction } from '../store/actions';
import { calculateScore } from '../helpers/calculateScore';

export const Highscores = () => {
  const [highscores, setHighscores] = useState<IHighscore[]>([]);
  const [highscoresSmarter, setHighscoresSmarter] = useState<IHighscore[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getHighscores().then((hs) => {
      hs.forEach((element) => {
        element.score = Number((100 / (1 + element.errors)).toFixed(2));
        element.smarterCalculatedScore = calculateScore(
          element.length,
          element.uniqueCharacters,
          element.errors,
          element.duration
        );
      });

      hs.sort(function (a, b) {
        return b.score! - a.score!;
      });
      setHighscores([...hs]);

      hs.sort(function (a, b) {
        return b.smarterCalculatedScore! - a.smarterCalculatedScore!;
      });
      setHighscoresSmarter([...hs]);
    });
  }, []);

  return (
    <>
      <h1>Highscores</h1>

      <div className="row">
        <div className="col">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {highscores.map((element, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.userName}</td>
                  <td>{element.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {highscoresSmarter.map((element, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.userName}</td>
                  <td>{element.smarterCalculatedScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <br />
      <Button
        text="Restart"
        onClick={() => {
          dispatch(setGamePhaseAction('PLAY'));
        }}
      />
    </>
  );
};
