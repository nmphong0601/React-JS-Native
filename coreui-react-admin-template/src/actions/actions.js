import Constants from './constants';
import AppDispatcher from '../dispatcher/dispatcher';
import NguoiDungApi from '../stores/NguoiDung/NguoiDungApi';
import Cookies from 'universal-cookie';

class GeneralActions {
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

class NguoiDungActions extends GeneralActions {
    login = loginData => {
        debugger;
        NguoiDungApi.login(loginData).then(result => {
            if(result !== undefined) {
                let authData = {};

                if (loginData.useRefreshTokens) {
                    authData = { 
                        token: result.access_token, 
                        userEmail: result.userEmail, 
                        userName: result.userName, 
                        userId: result.userId, 
                        refreshToken: result.refresh_token, 
                        useRefreshTokens: true, 
                        loaiTaiKhoan: result.loaiTaiKhoan, 
                        roleName: result.roleName, 
                        donViId: parseInt(result.donViId), 
                        phongBanId: parseInt(result.phongBanId), 
                        fileSize: parseInt(result.fileSize) 
                    }

                    localStorage.setItem('authorizationData', authData);
                }
                else {
                    authData = { 
                        token: result.access_token, 
                        userEmail: result.userEmail, 
                        userName: result.userName, 
                        userId: result.userId, 
                        refreshToken: "", 
                        useRefreshTokens: false, 
                        loaiTaiKhoan: result.loaiTaiKhoan, 
                        roleName: result.roleName, 
                        donViId: parseInt(result.donViId), 
                        phongBanId: parseInt(result.phongBanId), 
                        fileSize: parseInt(result.fileSize) 
                    }

                    localStorage.setItem('authorizationData', JSON.stringify(authData));
                }

                const cookies = new Cookies();
                cookies.set('BearerToken', result.access_token, { path: '/' });
                cookies.set('SessionId', result.sessionId, { path: '/' });

                AppDispatcher.dispatch({
                    actionType: "LOGIN",
                    userInfor: authData
                })
            }
        });
    };
};

class Actions {
    GeneralAction = new GeneralActions();
    NguoiDungAction = new NguoiDungActions();
}

export default new Actions();