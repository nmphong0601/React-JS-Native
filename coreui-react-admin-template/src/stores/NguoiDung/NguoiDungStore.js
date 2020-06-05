import AppDispatcher from '../../dispatcher/dispatcher';
import Constants from '../../actions/constants';
import EventEmitter from 'events';

const CHANGE_EVENT = 'CHANGE';
let _nguoiDungs = [];
let _nguoiDung = {};
let _pagingObject = {};

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
      case "FIND_ALL_ITEM_NguoiDungs":
        this.setNguoiDungs(action.items);
        this.emit(CHANGE_EVENT);
        break;
      case "PAGED_ITEM_NguoiDungs":
        this.setPagingNguoiDungs(action.pagingObject);
        this.emit(CHANGE_EVENT);
        break;
      case "FIND_SINGLE_ITEM_NguoiDungs":
        this.setNguoiDung(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "ADD_ITEM_NguoiDungs":
        this.setNguoiDung(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "UPDATE_ITEM_NguoiDungs":
        this.setNguoiDung(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "REMOVE_ITEM_NguoiDungs":
        this.removeNguoiDung(action.index);
        this.emit(CHANGE_EVENT);
        break;
      case "SHOW_ALL_ITEM_NguoiDungs":
        this.getNguoiDungs();
        this.emit(CHANGE_EVENT);
        break;
      case "SHOW_PAGED_ITEM_NguoiDungs":
        this.getPagingNguoiDungs();
        this.emit(CHANGE_EVENT);
      case "SHOW_SINGLE_ITEM_NguoiDungs":
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
  setPagingNguoiDungs(PagingObject) {
    _pagingObject = PagingObject;
  }
  getNguoiDungs() {
    return _nguoiDungs;
  }
  getPagingNguoiDungs() {
    return _pagingObject;
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