import AppDispatcher from '../../dispatcher/dispatcher';
import Constants from '../../actions/constants';
import EventEmitter from 'events';

const CHANGE_EVENT = 'CHANGE';
let _NhomQuyens = [];
let _NhomQuyen = {};
let _pagingObject = {};

class NhomQuyensStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.registerActions.bind(this));
  }
  registerActions(action) {
    switch(action.actionType) {
      case "FIND_ALL_ITEM_NhomQuyens":
        this.setNhomQuyens(action.items);
        this.emit(CHANGE_EVENT);
        break;
      case "PAGED_ITEM_NhomQuyens":
        this.setPagingNhomQuyens(action.pagingObject);
        this.emit(CHANGE_EVENT);
        break;
      case "FIND_SINGLE_ITEM_NhomQuyens":
        this.setNhomQuyen(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "ADD_ITEM_NhomQuyens":
        this.setNhomQuyen(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "UPDATE_ITEM_NhomQuyens":
        this.setNhomQuyen(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "REMOVE_ITEM_NhomQuyens":
        this.removeNhomQuyen(action.index);
        this.emit(CHANGE_EVENT);
        break;
      case "SHOW_ALL_ITEM_NhomQuyens":
        this.getNhomQuyens();
        this.emit(CHANGE_EVENT);
        break;
      case "SHOW_PAGED_ITEM_NhomQuyens":
        this.getPagingNhomQuyens();
        this.emit(CHANGE_EVENT);
      case "SHOW_SINGLE_ITEM_NhomQuyens":
        this.getNhomQuyen();
        this.emit(CHANGE_EVENT);
        break;
      default:
        break;
    }
    return true;
  }

  setNhomQuyens(NhomQuyens) {
    _NhomQuyens = NhomQuyens;
  }
  setPagingNhomQuyens(PagingObject) {
    _pagingObject = PagingObject;
  }
  getNhomQuyens() {
    return _NhomQuyens;
  }
  getPagingNhomQuyens() {
    return _pagingObject;
  }
  setNhomQuyen(NhomQuyen) {
    _NhomQuyen = NhomQuyen;
    const idx = _NhomQuyens.find(nd => nd.Id === NhomQuyen.Id);
    if(idx !== undefined && idx !== -1){ // Cập nhật item
      _NhomQuyens[idx] = _NhomQuyen;
    }
    else{
      _NhomQuyens.push(_NhomQuyen);
    }
  }
  getNhomQuyen() {
    return _NhomQuyen;
  }

  removeNhomQuyen(id) {
    const idx = _NhomQuyens.find(nd => nd.Id === id);
    if(idx !== -1){ // Xóa item
      _NhomQuyens.splice(idx, 1);
    }
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new NhomQuyensStore();