import React, { Component } from 'react';
import { Paper, Container } from '@material-ui/core';

import { MembersList } from './components/MembersList';
import { MembersHeader } from './components/MembersHeader';
import { getMembers } from '../../../../api/members';

class Members extends Component {
  state = {
    members: []
  };
  async componentDidMount() {
    const teamId = window.location.pathname.split('/').pop();
    const members = await getMembers(teamId);
    console.log(members);
    this.setState({ members });
  }
  render() {
    return (
      <Container>
        <MembersHeader title='Members' label='Invite to team' />
        <Paper>
          <MembersList members={this.state.members} />
        </Paper>
      </Container>
    );
  }
}
export default Members;
