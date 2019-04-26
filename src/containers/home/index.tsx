import * as React from 'react';
import MenuStore from '../../components/menu/store';
import { Container } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';

@inject('menu', 'router')
@observer
export default class Home extends React.Component<{
  menu: MenuStore;
  router: RouterStore;
}> {
  redirect = (url: string) => {
    const { setMenuActive } = this.props.menu;
    setMenuActive(url);

    const { history } = this.props.router;
    history.push(`${process.env.PUBLIC_URL}/${url}`);
  };

  render() {
    return (
      <Container />
    );
  }
}
