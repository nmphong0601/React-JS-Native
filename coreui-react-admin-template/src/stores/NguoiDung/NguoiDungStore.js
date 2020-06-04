import AppDispatcher from '../../dispatcher/dispatcher';
import Constants from '../../actions/constants';
import EventEmitter from 'events';
import NguoiDungApi from './NguoiDungApi';

const CHANGE_EVENT = 'CHANGE';
let _nguoiDungs = [];

class NguoiDungsStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.registerActions.bind(this));
  }
  registerActions(action) {
    switch(action.actionType) {
      case "LOGIN":
        NguoiDungApi.login(action.loginData);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.FIND_ALL_ITEM:
        NguoiDungApi.getAll();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.FIND_SINGLE_ITEM:
        NguoiDungApi.getSingle();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.ADD_ITEM:
        NguoiDungApi.create(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_ALL_ITEM:
        this.setNguoiDungResults(action.items);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_SINGLE_ITEM:
        this.setNguoiDungResults(action.item.id);
        this.emit(CHANGE_EVENT);
        break;
    }
    return true;
  }
  setNguoiDungResults(nguoidungs) {
    _nguoiDungs = nguoidungs;
  }
  getNguoiDungResults(nguoidungs) {
    return _nguoiDungs;
  }
  getNguoiDungSingleResult(id) {
    return _nguoiDungs[id];
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new NguoiDungsStore();