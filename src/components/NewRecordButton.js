import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const NewRecordButton = (props) => (
  <Button onClick={props.addRecord}
          variant="fab"
          color="primary"
          aria-label="add"
          style={{
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
          }}>
    <AddIcon />
  </Button>);

NewRecordButton.propTypes = {
  addRecord: PropTypes.func.isRequired
};

export default NewRecordButton;
