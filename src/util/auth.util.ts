import swal from 'sweetalert2';
import { decode } from 'jsonwebtoken';
export const isLoggedIn = () => {
  const user = sessionStorage.getItem('auth_userData');
  const token = sessionStorage.getItem('auth_token');
  return user !== null && token !== null;
};

interface UserData {
  name: string;
  login: string;
}

export const getFirstName = (): string => {
  const user = getUser().name.split(' ')[0];
  return user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
};

export const getUser = (): UserData => {
  const user = sessionStorage.getItem('auth_userData');
  if (user === null) {
    logOff();
    swal({
      type: 'error',
      title: 'Por favor, efetue login novamente',
      text: 'Sua sessão expirou!'
    });
    window.location.href = '/login';
    throw new Error('Sua sessão expirou');
  }

  try {
    return decode(user) as UserData;
  } catch (error) {
    logOff();
    swal({
      type: 'error',
      title: 'Por favor, efetue login novamente',
      text: 'Sua sessão expirou!'
    });
    window.location.href = '/login';
    throw error;
  }
};

export const setUser = (user: any) => {
  sessionStorage.setItem('auth_userData', user);
};

export const setAuth = (token: string) => {
  sessionStorage.setItem('auth_token', token);
};

export const getAuth = () => {
  return sessionStorage.getItem('auth_token');
};

export const logOff = () => {
  sessionStorage.removeItem('auth_userData');
  sessionStorage.removeItem('auth_token');
};