import React from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';
import PageHeader from './PageHeader';
import NewRecordButton from './NewRecordButton';
import Dialog from './Dialog';

const App = (props) => [
  <PageHeader title="NASA Open APIs" key="header" />,
  <DataTable
    key="dataTable"
    data={props.data}
    dataTable={props.dataTable}
    handleRequestSort={props.handleRequestSort}
    handleChangePage={props.handleChangePage}
    handleChangeRowsPerPage={props.handleChangeRowsPerPage}
    editRecord= {props.editRecord}
    deleteRecord={props.deleteRecord}
    />,
  <NewRecordButton key="newRecordButton"
                   handleClick={props.addRecord}
                   />,
  <Dialog key="dialog"
          open={props.dialog.open}
          toggleDialog={props.toggleDialog}
          handleFormData={props.handleFormData}
          saveRecord={props.saveRecord}
          record={props.dialog.record}
          rowId={props.dialog.rowId}
          />
  ];

App.propTypes = {
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

export default App;
