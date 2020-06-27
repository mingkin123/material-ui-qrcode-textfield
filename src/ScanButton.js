import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';

export default function ScanButton(props) {
  return (
    <InputAdornment position="end">
      <IconButton aria-label="scan" {...props}>
        <CropFreeIcon />
      </IconButton>
    </InputAdornment>
  );
}
