import React, { Component, Fragment } from 'react';
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
    console.log(this.props.match.path);
    return (
      <Switch>
        <Route path={`${this.props.match.path}/:id`} component={Members} />
        <Fragment>
          <Container>
            <Header title='Teams' label='Add team' />
            <Paper>
              <TeamsList teams={this.state.teams} />
            </Paper>
          </Container>
        </Fragment>
      </Switch>
    );
  }
}
export default Teams;
