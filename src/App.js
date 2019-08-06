import { Component } from 'react';
import { connect } from 'react-redux';

import { getTeamsAction } from './actions/teamsActions';

class App extends Component {
  componentWillMount() {
    this.props.getTeamsAction();
  }
  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = {
  getTeamsAction
};

export default connect(
  null,
  mapDispatchToProps
)(App);
