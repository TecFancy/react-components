import axios from 'axios';
import { apiPrefix } from './constant';

const instance = axios.create({
  baseURL: apiPrefix,
  timeout: 1000,
});

export default instance;
