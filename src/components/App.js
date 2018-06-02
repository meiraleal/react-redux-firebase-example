import React from 'react';
import PropTypes from 'prop-types';
import DataTableContainer from '../containers/DataTableContainer';
import DialogContainer from '../containers/DialogContainer';
import PageHeader from './PageHeader';
import NewRecordButton from './NewRecordButton';


const App = (props) => [
  <PageHeader
    title="React Redux Firebase Example"
    key="header"
    exportCSV={props.exportCSV}/>,
  <NewRecordButton
    key="newRecordButton"
    addRecord={props.addRecord}
  />,
  <DataTableContainer key="dataTable"/>,
  <DialogContainer key="dialog"/>
  ];

App.propTypes = {
  addRecord: PropTypes.func.isRequired,
  exportCSV: PropTypes.func.isRequired
};

export default App;
