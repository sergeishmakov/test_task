import React, { Component } from 'react';
import { Paper, Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import { MembersList } from './components/MembersList';
import { MembersHeader } from './components/MembersHeader';
import { getMembers } from '../../../../api/members';
import { InviteDialog } from './components/InviteDialog';
import { inviteToTeam } from '../../../../api/teams';
import Invite from './scenes/Invite';

class Members extends Component {
  state = {
    members: [],
    open: false,
    loading: false,
    error: false,
    success: false,
    teamId: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const members = await getMembers(id);
    this.setState({ members, teamId: id });
  }

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = values => {
    this.setState({ loading: true }, async () => {
      const response = await inviteToTeam({ teamId: this.state.teamId, ...values });
      if (response.statusCode === 200) {
        const members = await getMembers(this.state.teamId);
        this.setState({ members, success: true, loading: false }, async () => {
          await this.sleep(3000);
          this.setState({ open: false, success: false });
        });
      } else {
        this.setState({ error: true, loading: false }, async () => {
          await this.sleep(3000);
          this.setState({ open: false, error: false });
        });
      }
    });
  };

  render() {
    const { members, open, success, error, loading } = this.state;
    const { path } = this.props.match;
    return (
      <Switch>
        <Route path={`${path}/:id`} component={Invite} />
        <>
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
        </>
      </Switch>
    );
  }
}
export default Members;
