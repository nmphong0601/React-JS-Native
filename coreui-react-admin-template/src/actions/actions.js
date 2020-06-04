import Constants from './constants';
import AppDispatcher from '../dispatcher/dispatcher';

class Actions {
    findAllItem = items => {
        AppDispatcher.handleViewAction({
            actionType: Constants.FIND_ALL_ITEM,
            items: items
        })
    };
    findSingleItem = item => {
        AppDispatcher.handleViewAction({
            actionType: Constants.FIND_SINGLE_ITEM,
            item: item
        })
    };
    showAllItem = items => {
        AppDispatcher.handleViewAction({
            actionType: Constants.SHOW_ALL_ITEM,
            items: items
        })
    };
    showSingleItem = item => {
        AppDispatcher.handleViewAction({
            actionType: Constants.SHOW_SINGLE_ITEM,
            item: item
        })
    };
    addItem = item => {
        AppDispatcher.handleViewAction({
            actionType: Constants.ADD_ITEM,
            item: item
        })
    };
    updateItem = item => {
        AppDispatcher.handleViewAction({
            actionType: Constants.UPDATE_ITEM,
            item: item
        })
    };
    removeItem = index => {
        AppDispatcher.handleViewAction({
            actionType: Constants.REMOVE_ITEM,
            index: index
        })
    };
    increaseItem = index => {
        AppDispatcher.handleViewAction({
            actionType: Constants.INCREASE_ITEM,
            index: index
        })
    };
    decreaseItem = index => {
        AppDispatcher.handleViewAction({
            actionType: Constants.DECREASE_ITEM,
            index: index
        })
    };
};

class NguoiDungActions extends Actions {
    login = loginData => {
        AppDispatcher.handleViewAction({
            actionType: "LOGIN",
            loginData: loginData
        })
    };
};

//export default new Actions();

var Action = new Actions();
var NguoiDungAction = new NguoiDungActions();

export default { Action, NguoiDungAction }