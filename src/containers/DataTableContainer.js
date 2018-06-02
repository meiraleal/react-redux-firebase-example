import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import {handleRequestSort,
        handleChangePage,
        handleChangeRowsPerPage,
        editRecord,
        deleteRecord,
        toggleDialog} from '../actions';
import DataTable from '../components/DataTable';


class DataTableContainer extends React.Component {
  render() {
    return ((this.props.loaded ?
             <DataTable
             key="dataTable"
             data={this.props.data}
             dataTable={this.props.dataTable}
             handleRequestSort={this.props.handleRequestSort}
             handleChangePage={this.props.handleChangePage}
             handleChangeRowsPerPage={this.props.handleChangeRowsPerPage}
             editRecord= {this.props.editRecord}
             deleteRecord={this.props.deleteRecord}
             /> :
             <LinearProgress color="secondary" key="loader"/>));
  }
}

DataTableContainer.propTypes = {
  dataTable: PropTypes.object.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  editRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired

};

const StatefulDataTableContainer = connect(
  state => ({data: state.data, dataTable: state.dataTable}),
  {handleRequestSort,
   handleChangePage,
   handleChangeRowsPerPage,
   editRecord,
   deleteRecord,
  toggleDialog}
)(DataTableContainer);

export default StatefulDataTableContainer;
