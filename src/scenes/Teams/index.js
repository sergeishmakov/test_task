import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Members from './scenes/TeamMembers';
import TeamsList from './scenes/Teams';
import Invite from './scenes/InviteTeamMember';

class Teams extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route path={`${path}/invite/:token`} component={Invite} />
        <Route path={`${path}/:id`} component={Members} />
        <TeamsList />
      </Switch>
    );
  }
}
export default Teams;
