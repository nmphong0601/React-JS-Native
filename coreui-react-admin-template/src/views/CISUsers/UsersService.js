import ResourceService from '../../resourceService';
import axios from "axios";

class UsersService extends ResourceService {
    constructor(){
        super("users");
    }

    login = (loginData) => {
        debugger;
        const data = {
          userName: loginData.userName,
          password: loginData.password
        }

        return axios.post(this.serviceUrl +"login",{ data }).then(res => {
            if (res.statusText !== 'OK') {
              this.handleResponseError(res);
            }
            return res.data;
          })
          .catch(error => {
            this.handleError(error);
          });

        // return fetch(this.serviceUrl + "login", {
        //   method: "POST",
        //   mode: "no-cors", //"cors",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: data
        //   //body: data
        // })
        //   .then(response => {
        //     if (!response.ok) {
        //       this.handleResponseError(response);
        //     }
        //     return response.json();
        //   })
        //   .catch(error => {
        //     this.handleError(error);
        //   });
    }
}

export default UsersService;