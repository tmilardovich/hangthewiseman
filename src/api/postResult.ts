import axios from 'axios';
import { IResult } from '../models/IResult';

export const postResult = async (result: IResult) => {
  return await axios
    .post(
      'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores',
      result,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => response.data);
};
