import axios from 'axios';

import { apiUrl } from '../../config';

export const client = axios.create({
  baseURL: apiUrl
});
