import axios from 'axios';
import { backend } from '../util/contants.util';

export const getLogin = (params: any) => {
  return axios.request({ method: 'get', baseURL: backend, url: `/usuarios`, params });
};

export const postUser = (data: any) => {
  return axios.request({ baseURL: backend, url: `/usuarios`, data });
};
