import React, { Component, Fragment } from 'react';

import { AddTeamsDialog } from '../../components/AddTeamsDialog';
import { TeamsHead } from '../../components/TeamsHead';

class TeamsHeadContainer extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = async values => {};

  render() {
    return (
      <Fragment>
        <TeamsHead onOpen={this.handleOpen} />
        <AddTeamsDialog onSubmit={this.handleSubmit} onClose={this.handleClose} open={this.state.open} />
      </Fragment>
    );
  }
}

export default TeamsHeadContainer;
