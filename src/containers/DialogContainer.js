import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {handleFormData,
        toggleDialog,
        saveRecord,
        searchNasaAPI,
        selectItemFromNasa} from '../actions';
import Dialog from '../components/Dialog';

class DialogContainer extends React.Component {
  render() {
    return (<Dialog key="dialog"
            open={this.props.dialog.open}
            record={this.props.dialog.record}
            rowId={this.props.dialog.rowId}
            suggestions={this.props.dialog.suggestions}
            toggleDialog={this.props.toggleDialog}
            handleFormData={this.props.handleFormData}
            saveRecord={this.props.saveRecord}
            searchNasaAPI={this.props.searchNasaAPI}
            selectItemFromNasa={this.props.selectItemFromNasa}
            />);
  }
}

DialogContainer.propTypes = {
  dialog: PropTypes.object.isRequired,
  handleFormData: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  saveRecord: PropTypes.func.isRequired,
  searchNasaAPI: PropTypes.func.isRequired,
  selectItemFromNasa: PropTypes.func.isRequired

};

const StatefulDialogContainer = connect(
  state => ({dialog: state.dialog}),
  {handleFormData, toggleDialog, saveRecord, searchNasaAPI, selectItemFromNasa}
)(DialogContainer);

export default StatefulDialogContainer;
