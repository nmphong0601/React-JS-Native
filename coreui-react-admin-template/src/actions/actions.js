import Constants from './constants';
import ResourceService from '../resourceService';
import AppDispatcher from '../dispatcher/dispatcher';

class Actions {
    constructor(props) {
        this.service = new ResourceService({endPoint: props.endPoint});
        this.object = props.objectType;
        console.log(this.GeneralApi);
    }

    findAllItem = () => {
        debugger;
        this.service.getAll().then(result => {
            if(result.statusText != 'OK'){
                console.log(result.data);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.FIND_ALL_ITEM + "_" + this.object,
                    items: result.data
                });
            }
            
        });
    };
    pagedItems = pagingInfor => {
        this.service.paged(pagingInfor).then(result => {
            if(result.statusText != 'OK'){
                console.log(result.data);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.PAGED_ITEM + "_" + this.object,
                    pagingObject: result.data
                });
            }
        });
    }
    findSingleItem = id => {
        this.service.getSingle(id).then(result => {
            if(result.statusText != 'OK'){
                console.log(result.data);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.FIND_SINGLE_ITEM + "_" + this.object,
                    item: result.data
                })
            }
        });
    };
    showAllItem = items => {
        AppDispatcher.dispatch({
            actionType: Constants.SHOW_ALL_ITEM + "_" + this.object,
            items: items
        })
    };
    showSingleItem = item => {
        AppDispatcher.dispatch({
            actionType: Constants.SHOW_SINGLE_ITEM + "_" + this.object,
            item: item
        })
    };
    addItem = item => {
        this.service.addItem(item).then(result => {
            if(result.statusText != 'OK'){
                console.log(result.data);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.ADD_ITEM + "_" + this.object,
                    item: item
                });
            }
            
        });
    };
    updateItem = (id, item) => {
        this.service.update(id, item).then(result => {
            if(result.statusText != 'OK'){
                console.log(result.data);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.UPDATE_ITEM + "_" + this.object,
                    item: item
                });
            }
            
        });
    };
    removeItem = id => {
        this.service.delete(id).then(result => {
            if(result.statusText != 'OK'){
                console.log(result.data);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.REMOVE_ITEM + "_" + this.object,
                    index: id
                });
            }
            
        });
    };
    increaseItem = index => {
        AppDispatcher.dispatch({
            actionType: Constants.INCREASE_ITEM + "_" + this.object,
            index: index
        });
    };
    decreaseItem = index => {
        AppDispatcher.dispatch({
            actionType: Constants.DECREASE_ITEM + "_" + this.object,
            index: index
        });
    };
};

export default Actions;