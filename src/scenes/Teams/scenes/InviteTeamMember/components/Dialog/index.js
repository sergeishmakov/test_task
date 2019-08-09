import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog as DialogMui, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';

import { Row, Wrapper, CheckIcon, ErrorIcon, CircularProgress } from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export function Dialog({ onClose, open, message, title, status }) {
  const { success, loading, error } = status;
  return (
    <DialogMui maxWidth='xs' fullWidth open={open} TransitionComponent={Transition} keepMounted onClose={onClose}>
      <Row>
        <DialogTitle color='primary'>{title}</DialogTitle>
        <Button color='inherit' onClick={onClose}>
          <Clear />
        </Button>
      </Row>

      <DialogContent>
        <Wrapper>
          {loading && <CircularProgress />}
          {success && <CheckIcon />}
          {error && <ErrorIcon />}
          <DialogContentText color={error ? 'secondary' : 'primary'}>{message}</DialogContentText>
        </Wrapper>
      </DialogContent>
    </DialogMui>
  );
}
