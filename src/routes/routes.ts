import { RouteProps } from 'react-router-dom';
import Poema from '../containers/poema';
import Usuarios from '../containers/usuarios';

const publicUrl = process.env.PUBLIC_URL;

export const routes: RouteProps[] = [
  { path: `${publicUrl}/poema`, component: Poema, exact: true },
  { path: `${publicUrl}/usuario`, component: Usuarios, exact: true },
];