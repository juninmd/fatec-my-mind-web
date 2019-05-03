import * as React from 'react';
import MenuStore from '../../components/main-menu/store';
import { Container } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';

@inject('mainMenu', 'router')
@observer
export default class Usuario extends React.Component<{
  menu: MenuStore;
  router: NewRouterStore;
}> {
  redirect = (url: string) => {
    const { setMenuActive } = this.props.menu;
    setMenuActive(url);

    const { history } = this.props.router;
    history.push(`${process.env.PUBLIC_URL}/${url}`);
  };

  render() {
    return (
      <Container>
        <p>CCCCCCCCCCCC</p>
      </Container>
    );
  }
}
