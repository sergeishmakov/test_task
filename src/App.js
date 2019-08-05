import { Component } from 'react';
import { connect } from 'react-redux';

import { getTeamsAction } from './actions/teamsActions';
import { getUsersAction } from './actions/usersActions';

class App extends Component {
  componentWillMount() {
    this.props.getTeamsAction();
    this.props.getUsersAction();
  }
  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = {
  getTeamsAction,
  getUsersAction
};

export default connect(
  null,
  mapDispatchToProps
)(App);
