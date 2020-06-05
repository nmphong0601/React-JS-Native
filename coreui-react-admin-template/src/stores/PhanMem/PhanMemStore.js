import AppDispatcher from '../../dispatcher/dispatcher';
import Constants from '../../actions/constants';
import EventEmitter from 'events';

const CHANGE_EVENT = 'CHANGE';
let _PhanMems = [];
let _PhanMem = {};
let _pagingObject = {};

class PhanMemsStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.registerActions.bind(this));
  }
  registerActions(action) {
    debugger;
    switch(action.actionType) {
      case "FIND_ALL_ITEM_PhanMems":
        this.setPhanMems(action.items);
        this.emit(CHANGE_EVENT);
        break;
      case "PAGED_ITEM_PhanMems":
        this.setPagingPhanMems(action.pagingObject);
        this.emit(CHANGE_EVENT);
        break;
      case "FIND_SINGLE_ITEM_PhanMems":
        this.setPhanMem(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "ADD_ITEM_PhanMems":
        this.setPhanMem(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "UPDATE_ITEM_PhanMems":
        this.setPhanMem(action.item);
        this.emit(CHANGE_EVENT);
        break;
      case "REMOVE_ITEM_PhanMems":
        this.removePhanMem(action.index);
        this.emit(CHANGE_EVENT);
        break;
      case "SHOW_ALL_ITEM_PhanMems":
        this.getPhanMems();
        this.emit(CHANGE_EVENT);
        break;
      case "SHOW_PAGED_ITEM_PhanMems":
        this.getPagingPhanMems();
        this.emit(CHANGE_EVENT);
      case "SHOW_SINGLE_ITEM_PhanMems":
        this.getPhanMem();
        this.emit(CHANGE_EVENT);
        break;
      default:
        break;
    }
    return true;
  }

  setPhanMems(PhanMems) {
    _PhanMems = PhanMems;
  }
  setPagingPhanMems(PagingObject) {
    _pagingObject = PagingObject;
  }
  getPhanMems() {
    return _PhanMems;
  }
  getPagingPhanMems() {
    return _pagingObject;
  }
  setPhanMem(PhanMem) {
    _PhanMem = PhanMem;
    const idx = _PhanMems.find(nd => nd.Id === PhanMem.Id);
    if(idx !== undefined && idx !== -1){ // Cập nhật item
      _PhanMems[idx] = _PhanMem;
    }
    else{
      _PhanMems.push(_PhanMem);
    }
  }
  getPhanMem() {
    return _PhanMem;
  }

  removePhanMem(id) {
    const idx = _PhanMems.find(nd => nd.Id === id);
    if(idx !== -1){ // Xóa item
      _PhanMems.splice(idx, 1);
    }
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new PhanMemsStore();