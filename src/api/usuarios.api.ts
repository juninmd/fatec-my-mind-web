import axios from 'axios';
import { backend } from '../util/contants.util';

export const postLogin = (data: any) => {
  return axios.request({ method: 'post', baseURL: backend, url: `/login`, data });
};

export const postUser = (data: any) => {
  return axios.request({ baseURL: backend, url: `/usuarios`, data });
};
