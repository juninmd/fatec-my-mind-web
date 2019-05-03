import * as React from 'react';
import MenuStore from '../../components/main-menu/store';
import { Container } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';

interface Props {
  menu: MenuStore;
  router: NewRouterStore;
}

@inject('mainMenu', 'router')
@observer
export default class Usuario extends React.Component<Props> {
  update = (id: number) => {
    const { setHistory } = this.props.router;
    setHistory(`poema-list/${id}`);
  };

  render() {
    return (
      <Container>
        <p>CCCCCCCCCCCC</p>
      </Container>
    );
  }
}
