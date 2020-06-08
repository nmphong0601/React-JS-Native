import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
//import { Test } from './ResponsiveTable.styles';

class ResponsiveTable extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ResponsiveTable will mount');
  }

  componentDidMount = () => {
    console.log('ResponsiveTable mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ResponsiveTable will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ResponsiveTable will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ResponsiveTable did update');
  }

  componentWillUnmount = () => {
    console.log('ResponsiveTable will unmount');
  }

  confirmDelete(props) {
    this.props.onDelete(props);
  }

  render () {
    let headerColumns = this.props.columns;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Table className="responsiveTable">
        <thead>
          <tr>
            <th>#</th>
            {
              headerColumns.map((colHeader, index) => {
                return (
                  <th key={index}>{colHeader.title}</th>
                )
              })
            }
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((element, index) => (
              <tr key={index}>
                <th scope="row" className="pivoted">
                  <div className="tdBefore">#</div>
                  {index + 1}
                </th>
                {
                  headerColumns.map((col, index) => (
                    <td key={index} className="pivoted">
                      <div className="tdBefore">{col.title}</div>
                      {element[col.field]}
                    </td>
                  ))
                }
                <td className="pivoted">
                  <div className="tdBefore">Thao tác</div>
                  <a href="javascript:(void);" onClick={this.confirmDelete.bind(this, element)}>
                    <i className="fa text-muted fa-trash-o"> Xóa </i>
                  </a>
                  <a href="javascript:(void);" onClick={this.props.onEdit.bind(this, element)}>
                    <i className="fa text-muted fa-edit"> Sửa </i>
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

ResponsiveTable.propTypes = {
  // bla: PropTypes.string,
};

ResponsiveTable.defaultProps = {
  // bla: 'test',
};

//export default ResponsiveTable;

export default ResponsiveTable;