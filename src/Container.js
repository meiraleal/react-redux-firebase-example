import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';
import App from './components/App';

const Container = (props) => (<App {...props} />);

Container.propTypes = {
  dataTable: PropTypes.object.isRequired,
  dialog: PropTypes.object.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  addRecord: PropTypes.func.isRequired,
  editRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  saveRecord: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

const StatefulContainer = connect(
  state => state,
  actions
)(Container);

export default StatefulContainer;
