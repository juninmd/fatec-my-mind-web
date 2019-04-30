import { action, observable } from 'mobx';
import swal from 'sweetalert2';
import { getUser } from '../../util/auth.util';
import { assign } from '../../util/object.util';

export default class HomeStore {
  @observable records: any[] = [];

  @action buildRecords = async () => {
  }

}
const home = new HomeStore();
export { home };
