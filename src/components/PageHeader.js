import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PageHeader = (props) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit" style={{flex: 1}}>
        {props.title}
      </Typography>
      <Button color="inherit" onClick={props.exportCSV}>Export as CSV</Button>
    </Toolbar>
  </AppBar>);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  exportCSV: PropTypes.func.isRequired
}

export default PageHeader;
