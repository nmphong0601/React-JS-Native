import Constants from './constants';
import ResourceService from '../resourceService';
import AppDispatcher from '../dispatcher/dispatcher';

class Actions {
    constructor(props) {
        debugger;
        this.GeneralApi = new ResourceService({endPoint: props.endPoint});
        console.log(this.GeneralApi);
    }

    findAllItem = () => {
        debugger;
        this.GeneralApi.getAll().then(result => {
            if(result.toString().includes('Error')){
                console.log(result.Error);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.FIND_ALL_ITEM,
                    items: result
                });
            }
            
        });
    };
    pagedItems = pagingInfor => {
        this.GeneralApi.paged(pagingInfor).then(result => {
            if(result.toString().includes('Error')){
                console.log(result.Error);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.PAGED_ITEM,
                    items: result
                });
            }
        });
    }
    findSingleItem = id => {
        this.GeneralApi.getSingle(id).then(result => {
            if(result.toString().includes('Error')){
                console.log(result.Error);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.FIND_SINGLE_ITEM,
                    item: result
                })
            }
        });
    };
    showAllItem = items => {
        AppDispatcher.dispatch({
            actionType: Constants.SHOW_ALL_ITEM,
            items: items
        })
    };
    showSingleItem = item => {
        AppDispatcher.dispatch({
            actionType: Constants.SHOW_SINGLE_ITEM,
            item: item
        })
    };
    addItem = item => {
        this.GeneralApi.addItem(item).then(result => {
            if(result.toString().includes('Error')){
                console.log(result.Error);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.ADD_ITEM,
                    item: item
                });
            }
            
        });
    };
    updateItem = (id, item) => {
        this.GeneralApi.update(id, item).then(result => {
            if(result.toString().includes('Error')){
                console.log(result.Error);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.UPDATE_ITEM,
                    item: item
                });
            }
            
        });
    };
    removeItem = id => {
        this.GeneralApi.delete(id).then(result => {
            if(result.toString().includes('Error')){
                console.log(result.Error);
            }
            else{
                AppDispatcher.dispatch({
                    actionType: Constants.REMOVE_ITEM,
                    index: id
                });
            }
            
        });
    };
    increaseItem = index => {
        AppDispatcher.dispatch({
            actionType: Constants.INCREASE_ITEM,
            index: index
        });
    };
    decreaseItem = index => {
        AppDispatcher.dispatch({
            actionType: Constants.DECREASE_ITEM,
            index: index
        });
    };
};

export default Actions;