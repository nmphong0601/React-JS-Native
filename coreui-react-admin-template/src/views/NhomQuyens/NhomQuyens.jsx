import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhanMemActions from '../../actions/NhomQuyenActions';
import PhanMemsStore from '../../stores/PhanMem/PhanMemStore';

import NhomQuyenActions from '../../actions/NhomQuyenActions';
import NhomQuyenStore from '../../stores/NhomQuyen/NhomQuyenStore';

import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import PhanMems from '../PhanMems/PhanMems';
//import { Test } from './NhomQuyens.styles';

class NhomQuyens extends PureComponent { 
  constructor(props) {
    super(props);
    
    this.state = {
      appId: 0,
      pagingInfor: {
        filter: "1=1",
        maxSize: 3,
        page: 1,
        pageSize: 10,
        reverse: false,
        search: null,
        sort: "CreatedOn DESC",
        totalItems: 0
      },
      nhomQuyens: [],
      hasError: false,
    };
  }

  _onNhomQuyenChange = () => {
    debugger;
    this.setState({
        nhomQuyens: NhomQuyenStore.getPagingNhomQuyens()['ApiNhomQuyens']
    });
  }

  componentWillMount = () => {
    NhomQuyenStore.addChangeListener(this._onNhomQuyenChange);

    let _pagingInfo = this.state.pagingInfor;
    _pagingInfo.filter = "1=1";
    if (this.state.appId != null && this.state.appId != 0)
      _pagingInfo.filter = _pagingInfo.filter + ' and AppId=' + this.state.appId;
      
    this.setState({pagingInfor: _pagingInfo});
    NhomQuyenActions.pagedItems(this.state.pagingInfor);
  }

  componentDidMount = () => {
    console.log('NhomQuyens mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('NhomQuyens will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NhomQuyens will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('NhomQuyens did update');
  }

  componentWillUnmount = () => {
    NhomQuyenStore.removeChangeListener(this._onNhomQuyenChange);
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Card>
        <CardBody>
          <CardHeader>
                <strong><i className="icon-info pr-1"></i> Quản lý nhóm quyền</strong>
                <PhanMems type="dropdown"/>
          </CardHeader>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên nhóm quyền</th>
                <th>Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {this.state.nhomQuyens.map((element, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{element.Ten}</td>
                  <td>{element.MoTa}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

NhomQuyens.propTypes = {
  // bla: PropTypes.string,
};

NhomQuyens.defaultProps = {
  // bla: 'test',
};

export default NhomQuyens;
