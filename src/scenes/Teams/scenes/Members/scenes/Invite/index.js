import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { Container, Paper, Button, Typography } from '@material-ui/core';
import { Input, TextField } from 'final-form-material-ui';

import { Header } from './components/Header';
import { CongratulationDialog } from './components/CongratulationDialog';
import { RegisterForm, Group, StyledTypography } from './styles';
import { createUser } from '../../../../../../api/members';

class Invite extends Component {
  state = {
    open: true
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = async values => {
    const teamId = this.props.match.url.split('/')[2];
    await createUser({ ...values, teamId });
    this.props.history.push('/tasks');
  };

  render() {
    const { open } = this.state;
    return (
      <Container>
        <Header title='Registration' />
        <Paper>
          <Form
            onSubmit={this.handleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <RegisterForm onSubmit={handleSubmit}>
                <Container maxWidth='sm'>
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
export default Invite;
