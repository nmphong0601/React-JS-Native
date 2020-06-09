import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhanMemActions from '../../actions/PhanMemActions';
import PhanMemsStore from '../../stores/PhanMem/PhanMemStore';

import { Card, CardBody, CardHeader } from 'reactstrap';
import { ResponsiveTable, PaginationTable } from '../Base';
import Select from 'react-select';
//import { Test } from './PhanMems.styles';

class PhanMems extends PureComponent { 
  constructor(props) {
    super(props);
    
    this.state = {
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
      columnPhanMems: [
        { title: 'Tên phần mềm', field: 'Ten' },
        { title: 'Mô tả', field: 'MoTa' }
      ],
      selectedApp: null,
      phanMems: [],
      hasError: false,
    };
  }

  _onPhanMemChange = () => {
    debugger;
    this.setState({
        phanMems: PhanMemsStore.getPhanMems()
    });
  }

  componentWillMount = () => {
    PhanMemActions.pagedItems({});
    PhanMemsStore.addChangeListener(this._onPhanMemChange);
  }

  componentDidMount = () => {
    
  }

  componentWillReceiveProps = (nextProps) => {

  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('PhanMems will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('PhanMems did update');
  }

  componentWillUnmount = () => {
    PhanMemsStore.removeChangeListener(this._onPhanMemChange);
  }

  deletePhanMem(data) {
    if(data != undefined){
      PhanMemActions.removeItem(data.Id);
    }
  }

  updatePhanMem(data){
    alert(data.Ten);
  }

  pageChange(pageIndex){
    let _pagingInfo = this.state.pagingInfor;
    _pagingInfo.page = pageIndex;

    this.setState({pagingInfor: _pagingInfo});
    PhanMemActions.pagedItems(this.state.pagingInfor);
  }

  handleChange = selectedOption => {
    this.setState({ selectedApp: selectedOption });
    this.props.onSelectedChange(selectedOption);
  };

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if(this.props.type === 'dropdown'){
      let danhSachPhanMem = this.state.phanMems.map((element, index) => {
        return {value: element.AppId, label: element.Ten}
      });
      return (
        <Select value={this.state.selectedApp} options={danhSachPhanMem} onChange={this.handleChange} placeholder="Chọn phần mềm..."/>
        // <select>
        //     <option value="0">Chọn phần mềm</option>
        //   {this.state.phanMems.map((element, index) => (
        //     <option value={element.AppId}>{element.Ten}</option>
        //   ))}
        // </select>
      );
    }
    else  {
      return (
        <Card>
          <CardBody>
            <CardHeader>
                  <strong><i className="icon-info pr-1"></i> Quản lý phần mềm</strong>
            </CardHeader>
            <ResponsiveTable data={this.state.phanMems} columns={this.state.columnPhanMems} onRowDelete={this.deletePhanMem} onRowEdit={this.updatePhanMem}></ResponsiveTable>
            <PaginationTable page={this.state.pagingInfor.page} totalItems={this.state.pagingInfor.totalItems} pageSize={this.state.pagingInfor.pageSize} onPageChange={this.pageChange.bind(this)}/>
          </CardBody>
        </Card>
      );
    }
  }
}

PhanMems.propTypes = {
  // bla: PropTypes.string,
};

PhanMems.defaultProps = {
  // bla: 'test',
};

export default PhanMems;
