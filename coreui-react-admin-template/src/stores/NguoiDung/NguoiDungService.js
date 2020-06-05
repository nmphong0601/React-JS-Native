import Configuration from '../../configService';
import ResourceService from '../../resourceService';
import qs from 'qs';

class NguoiDungService extends ResourceService {
    constructor(props){
        super(props);
    }

    login = (loginData) => {
        debugger;
        const data = {
            grant_type: 'password',
            username: loginData.username,
            password: loginData.password,
            loaiTaiKhoan: loginData.loaiTaiKhoan,
            client_id: Configuration.Client_Id
        }

        return fetch(Configuration.API_URL + 'token', {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: qs.stringify(data)
        }).then(response => {
            if (!response.ok) {
              this.handleResponseError(response);
            }

            return response.json();
          })
          .catch(error => {
            this.handleError(error);
          });

        // return axios.post(Configuration.API_URL + 'token', stringData, {headers})
        // .then(res => {
        //     if (res.statusText !== 'OK') {
        //       this.handleResponseError(res);
        //     }

        //     if (loginData.useRefreshTokens) {
        //         const authData = { 
        //             token: res.data.access_token, 
        //             userEmail: res.data.userEmail, 
        //             userName: res.data.userName, 
        //             userId: res.data.userId, 
        //             refreshToken: res.data.refresh_token, 
        //             useRefreshTokens: true, 
        //             loaiTaiKhoan: res.data.loaiTaiKhoan, 
        //             roleName: res.data.roleName, 
        //             donViId: parseInt(res.data.donViId), 
        //             phongBanId: parseInt(res.data.phongBanId), 
        //             fileSize: parseInt(res.data.fileSize) 
        //         }

        //         localStorage.setItem('authorizationData', authData);
        //     }
        //     else {
        //         const authData = { 
        //             token: res.data.access_token, 
        //             userEmail: res.data.userEmail, 
        //             userName: res.data.userName, 
        //             userId: res.data.userId, 
        //             refreshToken: "", 
        //             useRefreshTokens: false, 
        //             loaiTaiKhoan: res.data.loaiTaiKhoan, 
        //             roleName: res.data.roleName, 
        //             donViId: parseInt(res.data.donViId), 
        //             phongBanId: parseInt(res.data.phongBanId), 
        //             fileSize: parseInt(res.data.fileSize) 
        //         }

        //         localStorage.setItem('authorizationData', authData);
        //     }

        //     const cookies = new Cookies();
        //     cookies.set('BearerToken', res.data.access_token, { path: '/' });
        //     cookies.set('SessionId', res.data.sessionId, { path: '/' });

        //     return res.data;
        //   })
        //   .catch(error => {
        //     this.handleError(error);
        //   });
    }
}

export default new NguoiDungService({endPoint: 'api/v1/nguoidungs'});