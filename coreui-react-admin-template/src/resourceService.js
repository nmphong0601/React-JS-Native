import Configuration from './configService';
import axios from "axios";

class ResourceService { // Cài đặt method chung cho tất cả các API getAll/getSingle/Insert/Update/Delete
    constructor(props) {
        debugger;
        this.config = Configuration;
        this.endpoint = props.endPoint;
        this.serviceUrl = this.config.API_URL + this.endpoint + '/';
    }
    async getAll() {
      return axios.get(this.serviceUrl).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.json();
        }).catch(error => {
          this.handleError(error);
          return error;
        });
    }
    async paged(pagingInfor) {

      const parameters = {
          expand: pagingInfor.expand,
          filter: pagingInfor.filter,
          search: pagingInfor.search,
          sort: pagingInfor.sort,
          page: pagingInfor.page,
          pageSize: pagingInfor.pageSize
      };

      return axios.get(this.serviceUrl, {params: parameters}).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.json();
        }).catch(error => {
          this.handleError(error);
          return error;
        });
    }
    async getSingle(id) {
      return axios.get(this.serviceUrl + "?id=" + id).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.json;
        }).catch(error => {
          this.handleError(error);
          return error;
        });
    }
    async create(newObj) {
      return axios.post(this.serviceUrl, { newObj }).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.json();
        }).catch(error => {
          this.handleError(error);
          return error;
        });
    }
    async delete(id) {
      return axios.delete(this.serviceUrl + "?id=" + id).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.json();
        }).catch(error => {
          this.handleError(error);
          return error;
        });
    }
    async update(id, obj) {
      return axios.put(this.serviceUrl + "?id=" + id, { obj }).then(response => {
            if (response.statusText !== "OK") {
              this.handleResponseError(response);
            }
            return response.json(0);
          }).catch(error => {
            this.handleError(error);
            return error;
          });
    }
    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }
    handleError(error) {
        console.log(error.message);
    }
}
export default ResourceService;