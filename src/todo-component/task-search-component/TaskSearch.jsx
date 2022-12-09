import React from 'react';
import TextField from '@mui/material/TextField';

export default function TaskSearch({ searchHandlder, defaultValue, resetField }) {
  const handleEnterKey = event => {
    if(event.keyCode === 13) {
      searchHandlder(event.target.value);
      event.target.value = '';
      if(resetField) {
        resetField();
      }
    }
  }

    return (
        <TextField
        id="filled-required"
        variant="standard"
        fullWidth 
        hiddenLabel
        placeholder="What needs to be done?"
        onKeyUp={handleEnterKey}
        defaultValue={defaultValue}
      />
    );
}