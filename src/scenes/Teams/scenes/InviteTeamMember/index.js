import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { Container, Paper, Button, Typography } from '@material-ui/core';
import { Input, TextField } from 'final-form-material-ui';

import { Header } from './components/Header';
import { Dialog } from './components/Dialog';
import { RegisterForm, Group, StyledTypography } from './styles';
import { createUser } from '../../../../api/members';

const REGISTER_SUCCESS = { message: 'Registration completed successfully', title: 'Registration' };
const CONGRATULATION = { message: 'Congratulations, you are now in the team!', title: 'Welcome!' };
const ERROR = { message: 'Sorry, we did not send you an invitation, you cannot register', title: 'Error' };

class InviteTeamMember extends Component {
  state = {
    open: true,
    success: false,
    loading: false,
    error: false,
    message: CONGRATULATION.message,
    title: CONGRATULATION.title
  };

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = async values => {
    const { token } = this.props.match.params;
    try {
      this.setState({ open: true, loading: true, message: null, error: false });
      await createUser({ ...values, token });
      this.setState({
        success: true,
        loading: false,
        message: REGISTER_SUCCESS.message,
        title: REGISTER_SUCCESS.title
      });
      await this.sleep(2000);
      this.props.history.push('/tasks');
    } catch (e) {
      this.setState({
        message: ERROR.message,
        error: true,
        loading: false,
        title: ERROR.title
      });
    } finally {
      await this.sleep(4000);
      this.setState({ loading: false, open: false, success: false });
    }
  };

  render() {
    const { open, error, loading, message, title, success } = this.state;
    return (
      <Container>
        <Header title='Registration' />
        <Paper>
          <Form
            onSubmit={this.handleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <RegisterForm onSubmit={handleSubmit}>
                <Container maxWidth='sm'>
                  {error && <StyledTypography color='secondary'>{message}</StyledTypography>}
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
                  Sign Up
                </Button>
              </RegisterForm>
            )}
          />
        </Paper>
        <Dialog
          open={open}
          onClose={this.handleClose}
          title={title}
          status={{ success, error, loading }}
          message={message}
        />
      </Container>
    );
  }
}
export default InviteTeamMember;
