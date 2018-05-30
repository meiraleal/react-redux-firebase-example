import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const NewRecordButton = (props) => (
  <Button variant="fab" color="primary" aria-label="add" style={{
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
            }}>
    <AddIcon />
  </Button>);

export default NewRecordButton;
