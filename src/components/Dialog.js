import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Dialog = (props) => (
    <MuiDialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send
          updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.toggleDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={props.toggleDialog} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </MuiDialog>
);

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired
};

export default Dialog;
