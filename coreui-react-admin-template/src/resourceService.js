import Actions from './actions/actions';
import Configuration from './configService';
import axios from "axios";

class ResourceService { // Cài đặt method chung cho tất cả các API getAll/getSingle/Insert/Update/Delete
    constructor(endPointString) {
        this.config = Configuration;
        this.endpoint = endPointString;
        this.serviceUrl = this.config.API_URL + this.endpoint + '/';
    }
    async getAll() {
      return axios.get(this.serviceUrl).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.data;
        })
        .then(json => {
          console.log(json);
          const items = [];
          const itemArray = json;
          for (var i = 0; i < itemArray.length; i++) {
            items.push(itemArray[i]);
          }

          Actions.showAllItem(items)
          return items;
        })
        .catch(error => {
          this.handleError(error);
        });
    }
    async getSingle(id) {
      return axios.get(this.serviceUrl + "?id=" + id).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.data;
        })
        .then(item => {
          Actions.showSingleItem(item);
          return item;
        })
        .catch(error => {
          this.handleError(error);
        });
    }
    async create(newObj) {
      return axios.post(this.serviceUrl, { newObj }).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }

          Actions.addItem(response.data);
          return response.data;
        })
        .catch(error => {
          this.handleError(error);
        });
    }
    async delete(id) {
      return axios.delete(this.serviceUrl + "?id=" + id).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }

          Actions.removeItem(response.data);
          return response.data;
        })
        .catch(error => {
          this.handleError(error);
        });
    }
    async update(id, obj) {
      return axios.put(this.serviceUrl + "?id=" + id, { obj }).then(response => {
            if (response.statusText !== "OK") {
              this.handleResponseError(response);
            }

            Actions.updateItem(response.data);
            return response.data;
          })
          .catch(error => {
            this.handleError(error);
          });
    }
    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }
    handleError(error) {
        console.log(error.message);
    }
}
export default new ResourceService();