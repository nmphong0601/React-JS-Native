import React, { Component } from "react";
import UsersService from './UsersService';
// import {} from './UsersStyles.js';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.service = new UsersService();
  }

  // componentWillMount(){
  //   debugger;
  //   this.state.service.getAll().then(result => {
  //     this.setState({ users: result.data });
  //     console.log(result.data);
  //   });
  // }

  componentDidMount() {
    debugger;
    this.service.getAll().then(result => {
      this.setState({ users: result });
    });
  }

  render() {
    debugger;
    if (this.state.users.length !== 0) {
      return (
        <div>
          <center>
            <h1>Contact List</h1>
          </center>
          {this.state.users.map(user => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{user.full_name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p class="card-text">{user.phone_number}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div>
        <center>
          <h1>Contact List</h1>
        </center>
      </div>
    );
  }
}

export default Users;
