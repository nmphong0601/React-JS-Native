import React, { PureComponent } from 'react';
import NguoiDungAction from '../actions/actions';
import PropTypes from 'prop-types';
import NguoiDungStore from '../../stores/NguoiDung/NguoiDungStore';
//import { Test } from './NguoiDungs.styles';

class NguoiDungs extends PureComponent { 
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getNguoiDungState = this.getNguoiDungState.bind(this);
    this.state = this.getNguoiDungState();
  }

  getNguoiDungState() {
    return {
      nguoiDungs: NguoiDungStore.getNguoiDungResults()
    }
  }

  componentWillMount = () => {
    NguoiDungStore.addChangeListener(this._onChange);
  }

  componentDidMount = () => {
    let nguoiDungs = [];
    NguoiDungAction.findAllItem(nguoiDungs);
  }

  componentWillUnmount = () => {
    NguoiDungStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getNguoiDungState);
  }

  render () {
    if(this.state.nguoiDungs.length != 0){
      return (
        <div>
          <center>
            <h1>Contact List</h1>
          </center>
          {this.state.nguoiDungs.map(nguoiDung => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{nguoiDung.TenDayDu}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{nguoiDung.Email}</h6>
                <p class="card-text">{nguoiDung.SoDT}</p>
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
            <h1>Contact List</h1>
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
