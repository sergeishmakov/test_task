import React, { Component } from 'react';
import { Paper, Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import { TeamsList } from './components/TeamsList';
import { getTeams } from '../../api/teams';
import { Header } from './components/Header';
import Members from './scenes/Members';

class Teams extends Component {
  state = {
    teams: []
  };

  async componentDidMount() {
    const teams = await getTeams();
    this.setState({ teams });
  }

  render() {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route path={`${path}/:id`} component={Members} />
        <>
          <Container>
            <Header title='Teams' label='Add team' />
            <Paper>
              <TeamsList teams={this.state.teams} />
            </Paper>
          </Container>
        </>
      </Switch>
    );
  }
}
export default Teams;
