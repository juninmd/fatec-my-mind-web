import { action, observable } from 'mobx';

export default class MenuStore {
  getActiveMenu() {
    const [, activeMenu] = location.pathname.split('/');
    return activeMenu;
  }

  @observable activated: string = this.getActiveMenu();

  @action setMenuActive = (name: string) => {
    this.activated = name;
  };
}

const menu = new MenuStore();
export { menu };
