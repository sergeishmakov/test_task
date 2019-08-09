import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export function CongratulationDialog({ onClose, open }) {
  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={onClose}>
      <DialogTitle color='primary'>Welcome!</DialogTitle>
      <DialogContent>
        <DialogContentText color='primary'>Congratulations, you are now in the team!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color='primary' onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
