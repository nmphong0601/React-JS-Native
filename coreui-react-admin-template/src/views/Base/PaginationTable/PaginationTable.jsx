import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { PaginationCenter } from './PaginationTable.styles';

class PaginationTable extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };
  }

  handleClick(e, index) {
    e.preventDefault();

    this.setState({
      currentPage: index
    });
    
    this.props.onPageChange(index);
  }

  render () {
    let totalPages = Math.ceil(this.props.totalItems / this.props.pageSize);

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <PaginationCenter size="md" aria-label="Page navigation table">
        <PaginationItem>
          <PaginationLink onClick={e => this.handleClick(e, 1)} first href="#" />
        </PaginationItem>
        <PaginationItem disabled={this.props.page - 1 <= 0}>
          <PaginationLink onClick={e => this.handleClick(e, this.props.page - 1)} previous href="#" />
        </PaginationItem>
        {[...Array(totalPages)].map((page, i) => 
          <PaginationItem active={i === this.props.page - 1} key={i}>
            <PaginationLink onClick={e => this.handleClick(e, i + 1)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem disabled={this.props.page - 1 >= totalPages - 1}>
          <PaginationLink onClick={e => this.handleClick(e, this.props.page + 1)} next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={e => this.handleClick(e, totalPages)} last href="#" />
        </PaginationItem>
      </PaginationCenter>
    );
  }
}

PaginationTable.propTypes = {
  // bla: PropTypes.string,
};

PaginationTable.defaultProps = {
  // bla: 'test',
};

export default PaginationTable;
