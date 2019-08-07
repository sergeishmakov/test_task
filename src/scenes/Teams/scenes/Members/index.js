import React, { Component } from 'react';
import { Paper, Container } from '@material-ui/core';

import { MembersList } from './components/MembersList';
import { MembersHeader } from './components/MembersHeader';
import { getMembers } from '../../../../api/members';
import { InviteDialog } from './components/InviteDialog';

class Members extends Component {
  state = {
    members: [],
    open: false,
    loading: false,
    error: false,
    success: false
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const members = await getMembers(id);
    this.setState({ members });
  }

  handleOpen = () => {
    console.log('ok');
    this.setState({ open: true });
    console.log('ok 2');
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = values => {
    this.setState({ loading: true }, async () => {
      try {
        // await inviteToTeam(values);
        this.setState({ success: true, loading: false, open: false });
      } catch (e) {
        this.setState({ error: true, loading: false });
      }
    });
  };

  render() {
    const { members, open, success, error, loading } = this.state;
    return (
      <Container>
        <MembersHeader onOpen={this.handleOpen} title='Members' label='Invite to team' />
        <Paper>
          <MembersList members={members} />
        </Paper>
        <InviteDialog
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
          open={open}
          status={{ error, loading, success }}
        />
      </Container>
    );
  }
}
export default Members;
