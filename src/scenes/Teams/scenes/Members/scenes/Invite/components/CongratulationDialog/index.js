import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export function CongratulationDialog({ onClose, open }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle color='primary' id='alert-dialog-slide-title'>
        Welcome!
      </DialogTitle>
      <DialogContent>
        <DialogContentText color='primary' id='alert-dialog-slide-description'>
          Congratulations, you are now in the team!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color='secondary' onClick={onClose}>
          Cloce
        </Button>
      </DialogActions>
    </Dialog>
  );
}
