import axios from 'axios';

import { apiUrl } from '../../config';

console.log(apiUrl);
export const client = axios.create({
  baseURL: apiUrl,
  timeout: 30000
});
