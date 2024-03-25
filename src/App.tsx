import './App.css';
import { useSelector } from 'react-redux';
import { HangmanState } from './store/reducers';
import { Start } from './pages/Start';
import { Play } from './pages/Play';
import { Highscores } from './pages/Highscores';

function App() {
  const store = useSelector((state: any) => state.hangman as HangmanState);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
      {store.gamePhase === 'START' && <Start />}
      {store.gamePhase === 'PLAY' && <Play />}
      {store.gamePhase === 'HIGHSCORES' && <Highscores />}
    </div>
  );
}

export default App;
