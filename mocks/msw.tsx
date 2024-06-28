import { type DefaultBodyType, http, HttpResponse } from 'msw';
import { apiPrefix } from './constant';

const processApi = (api: string) => `${apiPrefix}${api}`;

export const get = (api: string, responseJson: DefaultBodyType) =>
  http.get(processApi(api), () => HttpResponse.json(responseJson));
export const post = (api: string, responseJson: DefaultBodyType) =>
  http.post(processApi(api), () => HttpResponse.json(responseJson));
export const put = (api: string, responseJson: DefaultBodyType) =>
  http.put(processApi(api), () => HttpResponse.json(responseJson));
export const del = (api: string, responseJson: DefaultBodyType) =>
  http.delete(processApi(api), () => HttpResponse.json(responseJson));
export const patch = (api: string, responseJson: DefaultBodyType) =>
  http.patch(processApi(api), () => HttpResponse.json(responseJson));
export const options = (api: string, responseJson: DefaultBodyType) =>
  http.options(processApi(api), () => HttpResponse.json(responseJson));
