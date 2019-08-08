import React, { useState, useCallback } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, Typography } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import { InviteForm } from './components/InviteForm/index';
import { Row, CheckIcon, ErrorIcon, Wrapper, CircularProgress } from './styles';

export function InviteDialog({ open, onClose, onSubmit }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = useCallback(
    async values => {
      setLoading(true);
      setSuccess(false);
      setError(null);
      try {
        await onSubmit(values);
        setSuccess(true);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
        await sleep(2000);
        setError(null);
        setSuccess(false);
      }
    },
    [onSubmit]
  );

  return (
    <Dialog maxWidth='sm' fullWidth open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <Row>
        <DialogTitle>Invite to team</DialogTitle>
        <Button onClick={onClose}>
          <Clear />
        </Button>
      </Row>
      <DialogContent>
        {!loading && !success && !error ? (
          <>
            <DialogContentText>To send invite to team, please enter name and email address here.</DialogContentText>
            <InviteForm onSubmit={handleSubmit} onClose={onClose} />
          </>
        ) : (
          <Wrapper>
            {success && (
              <>
                <Typography>Success!</Typography>
                <CheckIcon />
              </>
            )}
            {error && (
              <>
                <Typography>There was an error sending</Typography>
                <ErrorIcon />
              </>
            )}
            {loading && (
              <>
                <Typography>Sending...</Typography>
                <CircularProgress size='50px' />
              </>
            )}
          </Wrapper>
        )}
      </DialogContent>
    </Dialog>
  );
}
