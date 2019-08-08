import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { Container, Paper, Button, Typography } from '@material-ui/core';
import { Input, TextField } from 'final-form-material-ui';

import { Header } from './components/Header';
import { CongratulationDialog } from './components/CongratulationDialog';
import { RegisterForm, Group, StyledTypography } from './styles';
import { createUser } from '../../../../api/members';

class InviteTeamMember extends Component {
  state = {
    open: true,
    error: null
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = async values => {
    const { token } = this.props.match.params;
    try {
      await createUser({ ...values, token });
      this.props.history.push('/tasks');
    } catch (e) {
      if (e.statusCode === 400) {
        this.setState({ error: 'Sorry, we did not send you an invitation, you cannot register' });
      } else {
        this.setState({ error: e.message });
      }
    }
  };

  render() {
    const { open, error } = this.state;
    return (
      <Container>
        <Header title='Registration' />
        <Paper>
          <Form
            onSubmit={this.handleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <RegisterForm onSubmit={handleSubmit}>
                <Container maxWidth='sm'>
                  {error && <Typography color='secondary'>{error}</Typography>}
                  <StyledTypography variant='h4'>Registration</StyledTypography>
                  <Group>
                    <Typography>Full Name:</Typography>
                    <Field fullWidth name='name' component={Input} placeholder='First Name' />
                  </Group>
                  <Group>
                    <Typography>Nickname:</Typography>
                    <Field fullWidth name='nickname' component={Input} placeholder='Your nickname' />
                  </Group>
                  <Group>
                    <Typography>About yourself:</Typography>
                    <Field fullWidth name='description' component={TextField} placeholder='Tell us what you can do' />
                  </Group>
                </Container>
                <Button type='submit' disabled={pristine || invalid}>
                  Submit
                </Button>
              </RegisterForm>
            )}
          />
        </Paper>
        <CongratulationDialog open={open} onClose={this.handleClose} />
      </Container>
    );
  }
}
export default InviteTeamMember;
