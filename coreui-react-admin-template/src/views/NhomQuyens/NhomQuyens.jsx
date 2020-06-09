import React, { PureComponent } from 'react';
import PropTypes, { element } from 'prop-types';

import PhanMemActions from '../../actions/NhomQuyenActions';
import PhanMemsStore from '../../stores/PhanMem/PhanMemStore';

import NhomQuyenActions from '../../actions/NhomQuyenActions';
import NhomQuyenStore from '../../stores/NhomQuyen/NhomQuyenStore';

import { Card, CardBody, CardHeader, Table} from 'reactstrap';
import MaterialTable from 'material-table';
import PhanMems from '../PhanMems/PhanMems';
import ResponsiveTable from '../Base/ResponsiveTable';
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
      columnNhomQuyens: [
        { title: 'Tên nhóm quyền', field: 'Ten' },
        { title: 'Mô tả', field: 'MoTa' }
      ],
      nhomQuyens: [],
      hasError: false,
    };
  }

  _onNhomQuyenChange = () => {
    debugger;
    this.setState({
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

  deleteNhomQuyen(data) {
    if(data != undefined){
      NhomQuyenActions.removeItem(data.Id);
    }
  }

  updateNhomQuyen(data){
    alert(data.Ten);
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
          <ResponsiveTable data={this.state.nhomQuyens} columns={this.state.columnNhomQuyens} onRowDelete={this.deleteNhomQuyen} onRowEdit={this.updateNhomQuyen}></ResponsiveTable>
          {/* <MaterialTable
            title="Danh sách nhóm quyền"
            columns={this.state.columnNhomQuyens}
            data={this.state.nhomQuyens}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      this.setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          /> */}
          
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
