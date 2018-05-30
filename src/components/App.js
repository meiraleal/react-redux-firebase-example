import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchBar from 'material-ui-search-bar';
import DataTable from './DataTable';

const styles = {
  root: {
    flexGrow: 1
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  }
};

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            NASA Open APIs
          </Typography>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              margin: '0 auto',
              maxWidth: 800
            }}
            />
        </Toolbar>
      </AppBar>
      <Paper className="MainContent">
        <DataTable data={props.data}
                   dataTable={props.dataTable}
                   handleRequestSort={props.handleRequestSort}
                   handleChangePage={props.handleChangePage}
                   handleChangeRowsPerPage={props.handleChangeRowsPerPage}/>
      </Paper>
      <Button variant="fab" color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Button>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  dataTable: PropTypes.object.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(App);
