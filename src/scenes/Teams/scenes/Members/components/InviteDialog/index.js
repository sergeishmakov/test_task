import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';

import { InviteForm } from './components/InviteForm';
// import { Add, KeyboardArrowLeft } from '@material-ui/icons';

export function InviteDialog({ open, onClose, onSubmit, status }) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Invite to team</DialogTitle>
      <DialogContent>
        <DialogContentText>To send invite to team, please enter name and email address here.</DialogContentText>
        <InviteForm onSubmit={onSubmit} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
