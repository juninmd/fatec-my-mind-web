import { RouteProps } from 'react-router-dom';
import Home from '../containers/home';

export const routes: RouteProps[] = [
  { path: `${process.env.PUBLIC_URL}/home`, component: Home, exact: true }
];