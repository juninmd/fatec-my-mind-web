import { observable } from 'mobx';

export default class LoginStore {
  @observable email = '';
  @observable senha = '';
  @observable loading = false;

}
const login = new LoginStore();
export { login };