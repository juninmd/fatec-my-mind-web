import { action, observable } from 'mobx';

export default class UsuarioListStore {
  @observable records: any[] = [];

  @action buildRecords = async () => {
  }

}
const usuarioList = new UsuarioListStore();
export { usuarioList };
