import { action, observable } from 'mobx';

export default class UsuarioStore {
  @observable records: any[] = [];

  @action buildRecords = async () => {
  }

}
const usuario = new UsuarioStore();
export { usuario };
