import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleChangePage,
         handleChangeRowsPerPage,
         handleRequestSort } from './actions';
import App from './components/App';

class Container extends Component {
  componentDidMount() {

  }

  render() {
    return (<App settings={this.props.settings}
            data={this.props.data}
            handleRequestSort={this.props.handleRequestSort}
            handleChangePage={this.props.handleChangePage}
            handleChangeRowsPerPage={this.props.handleChangeRowsPerPage}
            />);
  }
};

Container.propTypes = {
  settings: PropTypes.object.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

// Map the actions needed inside the App - startGame and the state from redux
const StatefulContainer = connect(
  state => state,
  { handleChangePage, handleChangeRowsPerPage, handleRequestSort }
)(Container);

export default StatefulContainer;
