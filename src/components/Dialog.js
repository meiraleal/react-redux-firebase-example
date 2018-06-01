import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NasaSearchInput from './NasaSearchInput';

const Dialog = (props) => (
  <MuiDialog
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="form-dialog-title"
    >
    <DialogTitle id="form-dialog-title">{isNaN(props.rowId) ? 'New' : 'Edit'} Record
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        To add a new record, search using the NASA Open API or entry the data in the form
      </DialogContentText>
      <div style={{display: 'flex'}}>
        <FormControl component="fieldset">
          <FormLabel component="legend">File Type</FormLabel>
          <RadioGroup
            aria-label="mediatype"
            name="media_type"
            value={props.record.mediaType}
            onChange={(event) => props.handleFormData('type', event)}
            >
            <FormControlLabel value="image" control={<Radio />} label="Image" />
            <FormControlLabel value="video" control={<Radio />} label="Video" />
            <FormControlLabel value="audio" control={<Radio />} label="Audio" />
          </RadioGroup>
        </FormControl>
        <div style={{marginLeft: 20}}>
          <NasaSearchInput mediaType={props.record.mediaType} searchNasaAPI={props.searchNasaAPI} suggestions={props.suggestions}/>
          Or add it manually:
          <TextField autoFocus value={props.record.title} margin="dense" id="title" label="Title" fullWidth onChange={(event) => props.handleFormData('title', event)} />
          <TextField margin="dense" value={props.record.description} id="description" label="Description" fullWidth onChange={(event) => props.handleFormData('description', event)} />
                <p>Select media file:</p>
            <input type="file"/>
            {props.record.preview &&
              <div>
                  <h4>Preview:</h4>
                    <img alt="Preview Image" src={props.record.preview} style={{width: 100, height: 100}}/>
           </div>}
        </div>
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.toggleDialog} color="primary">
        Cancel
      </Button>
      <Button onClick={props.saveRecord} color="primary">
        Save
      </Button>
    </DialogActions>
  </MuiDialog>
);

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  saveRecord: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
  rowId: PropTypes.number
};

export default Dialog;
