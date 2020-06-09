import React, { PureComponent, Suspense } from 'react';
import PropTypes, { element } from 'prop-types';

import NhomQuyenActions from '../../actions/NhomQuyenActions';
import NhomQuyenStore from '../../stores/NhomQuyen/NhomQuyenStore';

import { Container, Row, Col, Card, CardBody, CardHeader, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import PhanMems from '../PhanMems/PhanMems';
import { ResponsiveTable, PaginationTable, LoadingSpiner } from '../Base';
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
      loading: false,
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

    if(this.state.nhomQuyens.length != 0){
      this.setState({loading: false});
    }
  }

  componentWillMount = () => {
    NhomQuyenStore.addChangeListener(this._onNhomQuyenChange);

    let _pagingInfo = this.state.pagingInfor;
    _pagingInfo.filter = "1=1";
    if (this.state.appId != null && this.state.appId != 0)
      _pagingInfo.filter = _pagingInfo.filter + ' and AppId=' + this.state.appId;

    this.setState({pagingInfor: _pagingInfo});

    this.setState({loading: true});
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
    this.setState({loading: true});
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
  
  toggle = () => { 
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render () {
    const loading  = this.state.loading;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Container>
        {
          loading ? 
          <Row>
            <Col md="12">
              <LoadingSpiner/>
            </Col>
          </Row> :
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <CardHeader>
                        <strong><i className="icon-info pr-1"></i> Quản lý nhóm quyền</strong>
                        <Row>
                          <Col md="6">
                            <PhanMems type="dropdown" onSelectedChange={this.phanMemChange.bind(this)}/>
                          </Col>
                          <Col md="6">
                            <div style={{float: 'right'}}>
                              <Button color="success" size="md">
                                <i className="fa fa-plus"></i> Thêm
                              </Button>{' '}
                              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret color="danger" size="md">
                                  Xóa
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem>
                                    <a>Xóa một trang</a>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <a>Xóa tất cả</a>
                                  </DropdownItem>
                                </DropdownMenu>
                              </ButtonDropdown>
                            </div>
                          </Col>
                        </Row>
                        
                        
                  </CardHeader>
                  <ResponsiveTable data={this.state.nhomQuyens} columns={this.state.columnNhomQuyens} onRowDelete={this.deleteNhomQuyen} onRowEdit={this.updateNhomQuyen}></ResponsiveTable>
                  <PaginationTable page={this.state.pagingInfor.page} totalItems={this.state.pagingInfor.totalItems} pageSize={this.state.pagingInfor.pageSize} onPageChange={this.pageChange.bind(this)}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        }
      </Container>
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
