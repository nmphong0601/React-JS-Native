import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LoadingContainer, LoadingBar } from './LoadingSpiner.styles';

class LoadingSpiner extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <LoadingContainer>
        <LoadingBar>
          <img src="/assets/img/icons/loading.gif" width="50px"></img>
        </LoadingBar>
      </LoadingContainer>
    );
  }
}

LoadingSpiner.propTypes = {
  // bla: PropTypes.string,
};

LoadingSpiner.defaultProps = {
  // bla: 'test',
};

export default LoadingSpiner;
