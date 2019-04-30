import * as React from 'react';
import MenuStore from '../../components/main-menu/store';
import swal from 'sweetalert2';
import { assign } from '../../util/object.util';
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Input
} from 'semantic-ui-react';
import { getLogin } from '../../api/usuarios.api';
import { inject, observer } from 'mobx-react';
import { isLoggedIn, logOff, setAuth } from '../../util/auth.util';
import { RouterStore } from 'mobx-react-router';
import LoginStore from './store';


interface Props {
  menu: MenuStore;
  login: LoginStore;
  router: RouterStore;
  match: any;
  history: any;
}


@inject('mainMenu', 'router', 'login')
@observer
export default class Login extends React.Component<Props> {
  redirect = (url: string) => {
    const { setMenuActive } = this.props.menu;
    setMenuActive(url);

    const { history } = this.props.router;
    history.push(`${process.env.PUBLIC_URL}/${url}`);
  };

  componentWillMount() {
    const { match: { path } } = this.props;
    if (path === '/logout') {
      logOff();
      return;
    }

    if (isLoggedIn()) {
      this.props.history.push(`${process.env.PUBLIC_URL}/home`);
    }
  }

  handleChange(event: any) {
    const { id, value } = event.target;
    assign(this, id, value);
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    const { email, senha } = this.props.login;

    try {

      await this.setState({
        loading: true
      });

      const { data: [user] } = await getLogin({ email, senha });
      setAuth(JSON.stringify(user.userData));

      this.props.history.push(`${process.env.PUBLIC_URL}/home`);

      await this.setState({
        loading: false
      });

    } catch (error) {

      await this.setState({
        loading: false
      });

      swal({
        text: 'Ocorreu um erro não esperado.',
        type: 'error'
      });

      throw error;
    }
  }

  render() {

    const { email, senha, loading } = this.props.login;

    return (
      <Container>
        <Header as={'h2'} className='center' color='blue'>My Mind</Header>

        <Form className='login' onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Usuário</label>

            <Input
              id='login'
              minLength={3}
              maxLength={20}
              className={'uppercase'}
              placeholder='ex: AN_J'
              value={email}
              icon={'user'}
              iconPosition={'left'}
              onChange={this.handleChange}
              required={true} />

          </Form.Field>

          <Form.Field>
            <label>Senha</label>
            <Input
              type='password'
              id='pass'
              value={senha}
              placeholder='EX: 123'
              onChange={this.handleChange}
              icon={'lock'}
              iconPosition={'left'}
              minLength={3}
              maxLength={15}
              autoComplete={'current-password'}
              required={true} />
          </Form.Field>

          <Grid columns='2'>
            <Grid.Row>
              <Grid.Column width={12}>
                <Button icon={'unlock'} loading={loading} labelPosition={'left'} fluid={true} positive={true} content={'Acessar'} title='Acessar' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    );
  }
}
