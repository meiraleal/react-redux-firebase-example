import React from 'react';
import {render} from 'react-dom';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

const NasaSearchInput = (props) => (
  <Downshift
    onInputValueChange={(input) => props.searchNasaAPI(props.mediaType, input)}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div style={{flexGrow: 1, position: 'relative'}}>
        <TextField {...getInputProps()}
                   label="Search the NASA Open API"
                   margin="dense"
                   fullWidth />

        {isOpen ? (
          <div style={{position: 'absolute', zIndex: 1, left: 0, right: 0, backgroundColor: "#FFF"}}>
            {props.suggestions && props.suggestions.map((item, index) => (
              <MenuItem
                key={item.value}
                selected={index === highlightedIndex}
                onClick={() => props.selectItemFromNasa(props.mediaType, item)}
                component="div"
                style={{
                  fontWeight: index === highlightedIndex ? 500 : 400,
                }}
                >
                {item.title}
              </MenuItem>
              ))}
          </div>
        ) : null}
      </div>
    )}
  </Downshift>);

export default NasaSearchInput;
