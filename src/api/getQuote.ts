import axios from 'axios';
import { IQuote } from '../models/IQuote';

export const getQuote = async (): Promise<IQuote> => {
  return await axios
    .get('http://api.quotable.io/random')
    .then((response) => response.data);
};
