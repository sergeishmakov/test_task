import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

import { Header } from './components/Header';
import { Paper } from './styles';

class Tasks extends Component {
  render() {
    return (
      <Container>
        <Header title='Tasks' />
        <Paper>
          <Typography>Your assignments will be here</Typography>
        </Paper>
      </Container>
    );
  }
}
export default Tasks;
