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
    }
}

export default new NguoiDungService({endPoint: 'api/v1/nguoidungs'});