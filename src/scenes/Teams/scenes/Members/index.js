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
    const { id } = this.props.match.params;
    const members = await getMembers(id);
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
