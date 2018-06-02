import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loadInitialData, exportCSV, addRecord} from '../actions';
import App from '../components/App';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (<App {...this.props}/>);
  }
}

MainContainer.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  exportCSV: PropTypes.func.isRequired,
  addRecord: PropTypes.func.isRequired
};

const StatefulMainContainer = connect(
  () => ({}),
  {loadInitialData, exportCSV, addRecord}
)(MainContainer);

export default StatefulMainContainer;
