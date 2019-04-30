import * as React from 'react';
import MenuStore from './store';
import { Dropdown, Menu } from 'semantic-ui-react';
import { getFirstName } from '../../util/auth.util';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';

interface Props {
  history?: any;
  menu?: MenuStore;
  router?: RouterStore;
}


@inject('mainMenu', 'router')
@observer
export default class MainMenu extends React.Component<Props> {

  handleItemClick = (name: any, { url }: any) => {
    const { setMenuActive } = this.props.menu!;
    setMenuActive(name);

    const { history } = this.props.router!;
    history.push(`${process.env.PUBLIC_URL}${url}`);
  };

  logout() {
    return this.props.history.push(`${process.env.PUBLIC_URL}/logout`);
  }

  render() {

    const { activated } = this.props.menu!;

    return (
      <>
        <div className={'nav'}>
          <Menu color={'blue'} inverted={true} size='large' secondary={true} stackable={true}>
            <Menu.Item
              name='home'
              active={activated === 'home'}
              url='/home'
              onClick={this.handleItemClick}>
              Home
            </Menu.Item>
            <Menu.Item
              name='poema'
              active={activated === 'poema'}
              url='/poema'
              onClick={this.handleItemClick}>
              Poema
            </Menu.Item>
            <Menu.Item
              name='usuarios'
              active={activated === 'usuarios'}
              url='/usuarios'
              onClick={this.handleItemClick}>
              Usuários
            </Menu.Item>
            <Menu.Menu position='right'>
              <Dropdown item={true} text={getFirstName()}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={this.logout}>
                    Sair</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </div>
      </>
    );
  }
}