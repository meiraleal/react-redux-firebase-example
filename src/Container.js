import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleChangePage,
         handleChangeRowsPerPage,
         handleRequestSort } from './actions';
import App from './components/App';

class Container extends Component {
  render() {
    return (<App dataTable={this.props.dataTable}
            data={this.props.data}
            handleRequestSort={this.props.handleRequestSort}
            handleChangePage={this.props.handleChangePage}
            handleChangeRowsPerPage={this.props.handleChangeRowsPerPage}
            />);
  }
};

Container.propTypes = {
  dataTable: PropTypes.object.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

const StatefulContainer = connect(
  state => ({
    dataTable: state.dataTable,
    data: state.data
  }),
  { handleChangePage, handleChangeRowsPerPage, handleRequestSort }
)(Container);

export default StatefulContainer;
