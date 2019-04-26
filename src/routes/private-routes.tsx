import * as React from 'react';
import Home from '../container/home/home';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { routes } from './routes';

interface State {
  routes: RouteProps[];
}

export default class PrivateRoutes extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      routes: []
    };
  }

  async componentDidMount() {
    const { records: routesPath } = await getAcess(getUser().login);
    const routesWithAcess: RouteProps[] = [];

    for (const path of routesPath) {
      routesWithAcess.push(...routes.filter((q: any) => q.path!.indexOf(path) >= 0));
    }
    await this.setState({
      routes: routesWithAcess
    });
  }
  render() {
    const publicUrl = process.env.PUBLIC_URL;
    return (
      <Switch>
        <Route exact={true} path={`${publicUrl}/`} component={Home} />
        <Route path={`${publicUrl}/home`} component={Home} />
        {this.state.routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Route render={props => <NotFound {...props} />} />
      </Switch>
    );
  }
}