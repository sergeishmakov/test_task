import React, { Component } from 'react';
import { Paper, Container } from '@material-ui/core';

import { TeamsList } from './components/TeamsList';
import { getTeams } from '../../api/teams';
import { Header } from './components/Header';

class Teams extends Component {
  state = {
    teams: []
  };
  componentWillMount = async () => {
    const teams = await getTeams();
    console.log(teams);
    this.setState({ teams: teams });
  };
  render() {
    return (
      <Container>
        <Header title='Teams' />
        <Paper>
          <TeamsList teams={this.state.teams} />
        </Paper>
      </Container>
    );
  }
}
export default Teams;
