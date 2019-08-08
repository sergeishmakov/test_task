import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  CircularProgress,
  Typography
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import { InviteForm } from './components/InviteForm/index';
import { Row, StyledCheckCircle, StyledError, Center } from './styles';

export function InviteDialog({ open, onClose, onSubmit, status }) {
  const { loading, success, error } = status;
  return (
    <Dialog maxWidth='sm' fullWidth open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <Row>
        <DialogTitle id='form-dialog-title'>Invite to team</DialogTitle>
        <Button onClick={onClose}>
          <Clear />
        </Button>
      </Row>
      <DialogContent>
        {!loading && !success && !error ? (
          <>
            <DialogContentText>To send invite to team, please enter name and email address here.</DialogContentText>
            <InviteForm onSubmit={onSubmit} onClose={onClose} />
          </>
        ) : (
          <Center>
            {success && (
              <>
                <Typography>Success!</Typography>
                <StyledCheckCircle />
              </>
            )}
            {error && (
              <>
                <Typography>There was an error sending</Typography>
                <StyledError />{' '}
              </>
            )}
            {loading && (
              <>
                <Typography>Sending...</Typography>
                <CircularProgress />
              </>
            )}
          </Center>
        )}
      </DialogContent>
    </Dialog>
  );
}
