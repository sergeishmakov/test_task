import React, { Component, Fragment } from 'react';

import { InviteDialog } from '../../components/InviteDialog';
import { MembersHead } from '../../components/MembersHead';

class MembersHeadContainer extends Component {
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
        <MembersHead onClick={this.handleOpen} />
        <InviteDialog onSubmit={this.handleSubmit} onClose={this.handleClose} open={this.state.open} />
      </Fragment>
    );
  }
}

export default MembersHeadContainer;
