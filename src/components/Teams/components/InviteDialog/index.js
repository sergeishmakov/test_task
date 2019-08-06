import React from 'react';
import { FlatButton, Dialog } from 'material-ui';

export function InviteDialog({ open, onClose }) {
  const actions = [
    <FlatButton primary label='Cancel' onClick={onClose} />,
    <FlatButton primary label='Submit' onClick={onClose} />
  ];
  return (
    <Dialog title='Inviting to Team' actions={actions} modal={false} open={open} onRequestClose={onClose}></Dialog>
  );
}
