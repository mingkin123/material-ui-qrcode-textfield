import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function CloseButton(props) {
  return (
    <IconButton
      aria-label="close"
      style={{
        position: 'absolute',
        right: '0.5rem',
        top: '0.5rem',
      }}
      {...props}
    >
      <CloseIcon />
    </IconButton>
  );
}
