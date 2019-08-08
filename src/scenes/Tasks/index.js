import React, { Component } from 'react';
import { Paper, Container, AppBar, Typography } from '@material-ui/core';

class Tasks extends Component {
  render() {
    return (
      <Container>
        <AppBar title='Tasks' />
        <Paper>
          <Typography>Your assignments will be here</Typography>
        </Paper>
      </Container>
    );
  }
}
export default Tasks;
