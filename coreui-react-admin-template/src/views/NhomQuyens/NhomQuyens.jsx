import React, { PureComponent } from 'react';
import PropTypes, { element } from 'prop-types';

import NhomQuyenActions from '../../actions/NhomQuyenActions';
import NhomQuyenStore from '../../stores/NhomQuyen/NhomQuyenStore';

import { Card, CardBody, CardHeader } from 'reactstrap';
import PhanMems from '../PhanMems/PhanMems';
import { ResponsiveTable, PaginationTable } from '../Base';
//import { Test } from './NhomQuyens.styles';

class NhomQuyens extends PureComponent { 
  constructor(props) {
    super(props);
    
    this.state = {
      appId: 0,
      pagingInfor: {
        filter: "1=1",
        pageCount: 3,
        page: 1,
        pageSize: 10,
        reverse: false,
        search: null,
        sort: "CreatedOn DESC",
        totalItems: 0
      },
      columnNhomQuyens: [
        { title: 'Tên nhóm quyền', field: 'Ten' },
        { title: 'Mô tả', field: 'MoTa' }
      ],
      nhomQuyens: [],
      hasError: false,
    };
  }

  _onNhomQuyenChange = () => {
    let _pagingInfo = this.state.pagingInfor;
    _pagingInfo.totalItems = NhomQuyenStore.getPagingNhomQuyens()['ToTalRow'];

    this.setState({
      pagingInfor: _pagingInfo,
      columnNhomQuyens: [
        { title: 'Tên nhóm quyền', field: 'Ten' },
        { title: 'Mô tả', field: 'MoTa' }
      ],
      nhomQuyens: NhomQuyenStore.getNhomQuyens()
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

  deleteNhomQuyen(data) {
    if(data != undefined){
      NhomQuyenActions.removeItem(data.Id);
    }
  }

  updateNhomQuyen(data){
    alert(data.Ten);
  }

  pageChange(pageIndex){
    let _pagingInfo = this.state.pagingInfor;
    _pagingInfo.page = pageIndex;

    this.setState({pagingInfor: _pagingInfo});
    NhomQuyenActions.pagedItems(this.state.pagingInfor);
  }

  phanMemChange(app){
    debugger;
    let _pagingInfo = this.state.pagingInfor;   
    _pagingInfo.filter = "1=1";
    
    if (app != undefined && app.value != 0)
      _pagingInfo.filter = _pagingInfo.filter + ' and AppId=' + app.value;

    this.setState({pagingInfor: _pagingInfo});
    NhomQuyenActions.pagedItems(this.state.pagingInfor);
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
                <PhanMems type="dropdown" onSelectedChange={this.phanMemChange.bind(this)}/>
          </CardHeader>
          <ResponsiveTable data={this.state.nhomQuyens} columns={this.state.columnNhomQuyens} onDelete={this.deleteNhomQuyen} onEdit={this.updateNhomQuyen}></ResponsiveTable>
          <PaginationTable page={this.state.pagingInfor.page} totalItems={this.state.pagingInfor.totalItems} pageSize={this.state.pagingInfor.pageSize} onPageChange={this.pageChange.bind(this)}/>
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
