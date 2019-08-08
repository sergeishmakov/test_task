import React, { Component } from 'react';
import { Paper, Container } from '@material-ui/core';

import { TeamsList } from './components/TeamsList';
import { getTeams } from '../../../../api/teams';
import { Header } from './components/Header';
import { Wrapper, CircularProgress } from './styles';

class Teams extends Component {
  state = {
    teams: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const teams = await getTeams();
    this.setState({ teams, loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <Header title='Teams' label='Add team' />
        <Paper>
          {!loading ? (
            <TeamsList teams={this.state.teams} />
          ) : (
            <Wrapper>
              Loading...
              <CircularProgress />
            </Wrapper>
          )}
        </Paper>
      </Container>
    );
  }
}
export default Teams;
