import React, { Fragment, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, Card } from 'material-ui';
import { connect } from 'react-redux';

import theme from '../../styles';
import { TeamsList } from './components/TeamsList';
import { MembersList } from './components/MembersList';
import MembersHeadContainer from './containers/MembersHeadContainer';
import TeamsHeadContainer from './containers/TeamsHeadContainer';
import { Header } from '../Header';
import { getMembersAction } from '../../actions/membersActions';

class Teams extends Component {
  state = {
    teamId: this.props.teams[0] ? this.props.teams[0].id : 1
  };
  componentWillMount() {
    this.props.getMembersAction(this.state.teamId);
  }

  handleClick = id => {
    this.setState({ teamId: id });
    this.props.getMembersAction(id);
  };
  render() {
    const { teams, members } = this.props;
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Fragment>
          <Header title='Teams' />
          <Paper style={theme.rowPaper}>
            <Card style={theme.teams}>
              <TeamsHeadContainer />
              <TeamsList onClick={this.handleClick} teamId={this.state.teamId} teams={teams} />
            </Card>
            <Card style={theme.members}>
              <MembersHeadContainer />
              <MembersList members={members} />
            </Card>
          </Paper>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({ teams: state.teams, members: state.members });

const mapDispatchToProps = { getMembersAction };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
