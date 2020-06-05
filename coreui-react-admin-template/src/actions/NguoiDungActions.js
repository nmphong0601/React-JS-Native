import Actions from './actions';
import AppDispatcher from '../dispatcher/dispatcher';
import NguoiDungService from '../stores/NguoiDung/NguoiDungService';
import Cookies from 'universal-cookie';

class NguoiDungActions extends Actions {
    constructor(props) {
        super(props);
    }

    login = loginData => {
        debugger;
        NguoiDungService.login(loginData).then(result => {
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

                    localStorage.setItem('authorizationData', JSON.stringify(authData));
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

export default new NguoiDungActions({endPoint: 'api/v1/nguoidungs', objectType: 'NguoiDungs'});