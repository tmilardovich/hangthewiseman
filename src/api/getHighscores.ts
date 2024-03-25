import axios from 'axios';
import { IHighscore } from '../models/IHighscore';

export const getHighscores = async (): Promise<IHighscore[]> => {
  return await axios
    .get(
      'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores'
    )
    .then((response) => response.data);
};
