import React, { Component } from 'react';
import { Paper, Container } from '@material-ui/core';

import { MembersList } from './components/MembersList';
import { MembersHeader } from './components/MembersHeader';
import { getMembers } from '../../../../api/members';
import { InviteDialog } from './components/InviteDialog';
import { inviteToTeam } from '../../../../api/teams';
import { Wrapper, CircularProgress } from './styles';

class TeamMembers extends Component {
  state = {
    members: [],
    open: false,
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { id } = this.props.match.params;
    const members = await getMembers(id);
    this.setState({ members, loading: false });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = async values => {
    const { id } = this.props.match.params;
    await inviteToTeam({ teamId: id, ...values });

    const members = await getMembers(id);
    this.setState({ members });
  };
  render() {
    const { members, open, loading } = this.state;
    return (
      <Container>
        <MembersHeader onOpen={this.handleOpen} title='Members' label='Invite to team' />
        <Paper>
          {!loading ? (
            <MembersList members={members} />
          ) : (
            <Wrapper>
              Loading...
              <CircularProgress />
            </Wrapper>
          )}
        </Paper>
        <InviteDialog onClose={this.handleClose} onSubmit={this.handleSubmit} open={open} />
      </Container>
    );
  }
}
export default TeamMembers;
