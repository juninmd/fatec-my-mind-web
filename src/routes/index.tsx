import * as React from 'react';
import PrivateRoutes from './private-routes';
import { observer } from 'mobx-react';
import {
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {

  render() {

    return (
      <>
        <Switch>
          {1 === 1 ?
            <>
              <PrivateRoutes />
            </> : <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/login` }} />

          }
        </Switch>
      </>
    );
  }
}