import AppDispatcher from '../../dispatcher/dispatcher';
import Constants from '../../actions/constants';
import EventEmitter from 'events';

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
        this.setNguoiDungs(action.items);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.FIND_SINGLE_ITEM:
        this.setNguoiDung(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.ADD_ITEM:
        this.setNguoiDung(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.UPDATE_ITEM:
        this.setNguoiDung(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.REMOVE_ITEM:
        this.removeNguoiDung(action.index);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_ALL_ITEM:
        this.getNguoiDungs();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_SINGLE_ITEM:
        this.getNguoiDung();
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
    const idx = _nguoiDungs.find(nd => nd.Id === nguoidung.Id);
    if(idx !== undefined && idx !== -1){ // Cập nhật item
      _nguoiDungs[idx] = _nguoiDung;
    }
    else{
      _nguoiDungs.push(_nguoiDung);
    }
  }
  getNguoiDung() {
    return _nguoiDung;
  }

  removeNguoiDung(id) {
    const idx = _nguoiDungs.find(nd => nd.Id === id);
    if(idx !== -1){ // Xóa item
      _nguoiDungs.splice(idx, 1);
    }
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new NguoiDungsStore();