import React, { Component } from 'react';
import { Paper, Container, AppBar, Typography, Toolbar } from '@material-ui/core';

class Tasks extends Component {
  render() {
    return (
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>Workspace</Typography>
          </Toolbar>
        </AppBar>
        <Paper>
          <Typography>Your assignments will be here</Typography>
        </Paper>
      </Container>
    );
  }
}
export default Tasks;
