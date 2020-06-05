import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhanMemActions from '../../actions/PhanMemActions';
import PhanMemsStore from '../../stores/PhanMem/PhanMemStore';

import { Card, CardBody, CardHeader, Table } from 'reactstrap';
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
      phanMems: [],
      hasError: false,
    };
  }

  _onPhanMemChange = () => {
    debugger;
    this.setState({
        phanMems: PhanMemsStore.getPagingPhanMems()['ApiPhanMems']
    });
  }

  componentWillMount = () => {
    PhanMemActions.pagedItems({});
    PhanMemsStore.addChangeListener(this._onPhanMemChange);
  }

  componentDidMount = () => {
    
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('PhanMems will receive props', nextProps);
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

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if(this.props.type === 'dropdown'){
      let danhSachPhanMem = this.state.phanMems.map((element, index) => {
        return {value: element.AppId, label: element.Ten}
      });
      return (
        <Select className="col-md-3" options={danhSachPhanMem} placeholder="Chọn phần mềm..."/>
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
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên phần mềm</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>
                {this.state.phanMems.map((element, index) => (
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
}

PhanMems.propTypes = {
  // bla: PropTypes.string,
};

PhanMems.defaultProps = {
  // bla: 'test',
};

export default PhanMems;
