import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import DataTable from './DataTable';
import PageHeader from './PageHeader';
import NewRecordButton from './NewRecordButton';
import Dialog from './Dialog';

const App = (props) => [
  <PageHeader title="NASA Open APIs" key="header" />,
  <Paper className="MainContent" key="mainContent">
    <DataTable data={props.data}
               dataTable={props.dataTable}
               handleRequestSort={props.handleRequestSort}
               handleChangePage={props.handleChangePage}
               handleChangeRowsPerPage={props.handleChangeRowsPerPage}
               />
  </Paper>,
  <NewRecordButton key="newRecordButton"
                   handleClick={props.handleAddButtonClick}
                   />,
  <Dialog key="dialog"
          open={props.dialog.open}
          toggleDialog={props.toggleDialog}
          />
];

App.propTypes = {
  dataTable: PropTypes.object.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  handleAddButtonClick: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default App;
