import React, { PureComponent } from 'react';
import PropTypes, { element } from 'prop-types';
import NguoiDungActions from '../../actions/NguoiDungActions';
import NguoiDungStore from '../../stores/NguoiDung/NguoiDungStore';
import { Card } from 'reactstrap';
//import { Test } from './NguoiDungs.styles';

class NguoiDungs extends PureComponent { 
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getNguoiDungState = this.getNguoiDungState.bind(this);
    this.state = this.getNguoiDungState();
  }

  getNguoiDungState() {
    debugger;
    return {
      nguoiDung: NguoiDungStore.getNguoiDung()
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

    //NguoiDungActions.pagedItems(pagingInfor);
  }

  componentWillUnmount = () => {
    NguoiDungStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getNguoiDungState);
  }

  render () {
    let nguoiDung;
    debugger;
    if(this.state.nguoiDung != undefined){
      nguoiDung = this.state.nguoiDung;
      return (
        <div>
          <center>
            <h1>User infor</h1>
          </center>
          {/* {this.state.nguoiDung.map(element => (
            <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{element.TenDayDu}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{element.userEmail}</h6>
                  <p className="card-text">{element.roleName}</p>
                </div>
            </div>
          ))} */}
          { this.state.nguoiDung &&
            <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{nguoiDung.TenDayDu}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{nguoiDung.userEmail}</h6>
                    <p className="card-text">{nguoiDung.roleName}</p>
                  </div>
            </div>
          }
          
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
