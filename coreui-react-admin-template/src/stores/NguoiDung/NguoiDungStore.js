import AppDispatcher from '../../dispatcher/dispatcher';
import Constants from '../../actions/constants';
import EventEmitter from 'events';
import NguoiDungApi from './NguoiDungApi';

const CHANGE_EVENT = 'CHANGE';
let _nguoiDungs = [];
let _nguoiDung = {};

class NguoiDungsStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.registerActions.bind(this));
  }
  registerActions(action) {
    debugger;
    switch(action.actionType) {
      case "LOGIN":
        this.setNguoiDung(action.userInfor);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.FIND_ALL_ITEM:
        this.getNguoiDungs();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.FIND_SINGLE_ITEM:
        NguoiDungApi.getNguoiDung();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.ADD_ITEM:
        NguoiDungApi.create(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_ALL_ITEM:
        this.setNguoiDungs(action.items);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_SINGLE_ITEM:
        this.setNguoiDung(action.item);
        this.emit(CHANGE_EVENT);
        break;
      default:
        break;
    }
    return true;
  }

  setNguoiDungs(nguoidungs) {
    _nguoiDungs = nguoidungs;
  }
  getNguoiDungs() {
    return _nguoiDungs;
  }

  setNguoiDung(nguoidung) {
    _nguoiDung = nguoidung;
  }
  getNguoiDung() {
    return _nguoiDung;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new NguoiDungsStore();