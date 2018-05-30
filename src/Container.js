import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleChangePage,
         handleChangeRowsPerPage,
         handleRequestSort } from './actions';
import App from './components/App';

const Container = (props) => (<App {...props} />);

Container.propTypes = {
  dataTable: PropTypes.object.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

const StatefulContainer = connect(
  state => state,
  { handleChangePage, handleChangeRowsPerPage, handleRequestSort }
)(Container);

export default StatefulContainer;
