import React, { PureComponent } from 'react';
import PropTypes, { element } from 'prop-types';
import NguoiDungActions from '../../actions/NguoiDungActions';
import NguoiDungStore from '../../stores/NguoiDung/NguoiDungStore';
import { Card } from 'reactstrap';
//import { Test } from './NguoiDungs.styles';

class NguoiDungs extends PureComponent { 
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this); //Phải khai báo nếu không dùng Arrow function
    this.getNguoiDungState = this.getNguoiDungState.bind(this);
    this.state = this.getNguoiDungState();
  }

  getNguoiDungState() {
    debugger;
    return {
      nguoiDungs: NguoiDungStore.getNguoiDungs()
    }
  }

  componentWillMount = () => {
    NguoiDungStore.addChangeListener(this._onChange);
  }

  componentDidMount = () => {
    // const pagingInfor = {
    //   expand: "",
    //   filter: null,
    //   search: null,
    //   sort: "CreatedOn DESC",
    //   page: 1,
    //   pageSize: 10
    // }

    NguoiDungActions.findAllItem();
  }

  componentWillUnmount = () => {
    NguoiDungStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getNguoiDungState);
  }

  render () {
    let nguoiDungs;
    debugger;
    if(this.state.nguoiDungs != undefined){
      nguoiDungs = this.state.nguoiDungs;
      return (
        <div>
          <center>
            <h1>User infor</h1>
          </center>
          {this.state.nguoiDungs.map(element => (
            <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{element.TenDayDu}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{element.userEmail}</h6>
                  <p className="card-text">{element.roleName}</p>
                </div>
            </div>
          ))}         
        </div>
      );
    }
    else {
      return (
        <div>
          <center>
            <h1>User infor</h1>
          </center>
        </div>
      );
    }
  }
}

NguoiDungs.propTypes = {
  // bla: PropTypes.string,
};

NguoiDungs.defaultProps = {
  // bla: 'test',
};

export default NguoiDungs;
