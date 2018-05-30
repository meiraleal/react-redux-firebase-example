import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from 'material-ui-search-bar';
import Typography from '@material-ui/core/Typography';

const PageHeader = (props) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        {props.title}
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
  </AppBar>);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader;
