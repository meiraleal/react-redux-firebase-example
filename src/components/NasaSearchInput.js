import React from 'react';
import {render} from 'react-dom';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';


const items = [
  {value: 'apple'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
];

const NasaSearchInput = (props) => (
  <Downshift
    onChange={selection => alert(`You selected ${selection.value}`)}
    onInputValueChange={(input) => props.searchNasaAPI(props.mediaType, input)}
    itemToString={item => (item ? item.value : '')}
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
      <div>
        <TextField {...getInputProps()}
                   label="Search the NASA Open API"
                   margin="dense"
                   fullWidth />

        {isOpen ? (
          <div>
            {props.suggestions && props.suggestions.map((item, index) => (
                <div
                  {...getItemProps({
                    key: item.value,
                    index,
                    item,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item.value}
                </div>
              ))}
          </div>
        ) : null}
      </div>
    )}
  </Downshift>);

export default NasaSearchInput;
