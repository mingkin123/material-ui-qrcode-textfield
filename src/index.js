import React from 'react';
import QrReader from 'react-qr-reader';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CloseButton from './CloseButton';
import ScanButton from './ScanButton';

export default function QrcodeTextField(props) {
  const {
    dialogTitle = 'Scan your QRcode',
    DialogProps,
    InputComponent = TextField,
    InputProps,
    QrReaderProps,
    CloseButtonComponent = CloseButton,
    hideDialogTitle,
    hideCloseIcon,
    onClick,
    disableInput,
    ScanButtonComponent = ScanButton,
    onChange = () => {},
    value,
    ...rest
  } = props;
  const [open, setOpen] = React.useState(false);

  const handleScan = (data) => {
    if (data) {
      onChange(data);
      handleClose();
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleClick = (event) => {
    if (disableInput) {
      handleOpen();
    }
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <InputComponent
        value={value}
        onChange={onChange}
        InputProps={{
          endAdornment: !disableInput && (
            <ScanButtonComponent onClick={handleOpen} />
          ),
          ...InputProps,
        }}
        {...rest}
        onClick={handleClick}
      />
      <Dialog
        aria-labelledby={dialogTitle && 'qrcode-dialog-title'}
        {...DialogProps}
        onClose={handleClose}
        open={open}
      >
        {!hideDialogTitle && (
          <DialogTitle id="qrcode-dialog-title" disableTypography>
            <Typography variant="h6">{dialogTitle}</Typography>
            {!hideCloseIcon && <CloseButtonComponent onClick={handleClose} />}
          </DialogTitle>
        )}

        <QrReader
          delay={300}
          style={{ minWidth: '300px' }}
          {...QrReaderProps}
          onError={handleError}
          onScan={handleScan}
        />
      </Dialog>
    </React.Fragment>
  );
}
