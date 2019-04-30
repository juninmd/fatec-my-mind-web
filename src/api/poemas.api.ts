import axios from 'axios';
import { backend } from '../util/contants.util';

export const getPoemas = (params: any) => {
  return axios.request({ method: 'get', baseURL: backend, url: `/poemas`, params });
};

export const postPoemas = (data: any) => {
  return axios.request({ baseURL: backend, url: `/poemas`, data });
};

export const putPoemas = (data: any) => {
  return axios.request({ baseURL: backend, url: `/poemas`, data });
};

export const deletePoemas = (params: any) => {
  return axios.request({ method: 'get', baseURL: backend, url: `/poemas`, params });
};
