import Configuration from './configService';
import axios from "axios";

class ResourceService {
    constructor(objType) {
        this.config = new Configuration();
        this.endpoint = objType;
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
          return items;
        })
        .catch(error => {
          this.handleError(error);
        });
        // return fetch(this.serviceUrl)
        //   .then(response => {
        //     if (!response.ok) {
        //       this.handleResponseError(response);
        //     }
        //     return response.json();
        //   })
        //   .then(json => {
        //     console.log(json);
        //     const items = [];
        //     const itemArray = json;
        //     for (var i = 0; i < itemArray.length; i++) {
        //       items.push(itemArray[i]);
        //     }
        //     return items;
        //   })
        //   .catch(error => {
        //     this.handleError(error);
        //   });
    }
    async getSingle(id) {
      return axios.get(this.serviceUrl + "?id=" + id).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.data;
        })
        .then(item => {
          return item;
        })
        .catch(error => {
          this.handleError(error);
        });
        // return fetch(this.serviceUrl + "?id=" + id)
        //   .then(response => {
        //     if (!response.ok) {
        //       this.handleResponseError(response);
        //     }
        //     return response.json();
        //   })
        //   .then(item => {
        //     return item;
        //   })
        //   .catch(error => {
        //     this.handleError(error);
        //   });
    }
    async create(newObj) {
      return axios.post(this.serviceUrl, { newObj }).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.data;
        })
        .catch(error => {
          this.handleError(error);
        });
        // return fetch(this.serviceUrl, {
        //   method: "POST",
        //   mode: "cors",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(newObj)
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
    async delete(id) {
      return axios.delete(this.serviceUrl + "?id=" + id).then(response => {
          if (response.statusText !== "OK") {
            this.handleResponseError(response);
          }
          return response.data;
        })
        .catch(error => {
          this.handleError(error);
        });

        // return fetch(this.serviceUrl + "?id=" + id, {
        //   method: "DELETE",
        //   mode: "cors"
        // })
        //   .then(response => {
        //     if (!response.ok) {
        //       this.handleResponseError(response);
        //     }
        //   })
        //   .catch(error => {
        //     this.handleError(error);
        //   });
    }
    async update(id, obj) {
      return axios.put(this.serviceUrl + "?id=" + id, { obj }).then(response => {
            if (response.statusText !== "OK") {
              this.handleResponseError(response);
            }
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
export default ResourceService;