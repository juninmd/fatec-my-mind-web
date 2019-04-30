import { action, observable } from 'mobx';

export default class PoemaStore {
  @observable records: any[] = [];

  @action buildRecords = async () => {
  }

}
const poema = new PoemaStore();
export { poema };
