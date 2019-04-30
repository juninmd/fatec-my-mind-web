import * as React from 'react';
import PrivateRoutes from './private-routes';
import { observer } from 'mobx-react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { isLoggedIn } from '../util/auth.util';
import MainMenu from '../components/main-menu';
import Login from '../containers/login';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {

  render() {

    return (
      <>
        <Switch>
          <Route render={(props) => <Login {...props} path={`${process.env.PUBLIC_URL}/login`} />} />
          <Route render={(props) => <Login {...props} path={`${process.env.PUBLIC_URL}/logout`} />} />
          {isLoggedIn() ?
            <>
              <MainMenu />
              <PrivateRoutes />
            </> : <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/login` }} />

          }
        </Switch>
      </>
    );
  }
}