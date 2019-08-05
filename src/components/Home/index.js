import React from 'react';
import { deepOrangeA400, grey900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar, Paper, Subheader, List, Avatar, ListItem } from 'material-ui';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900
  },
  appBar: {
    color: deepOrangeA400,
    height: 50
  },
  wrapper: {
    padding: 30
  }
});
const teams = ['Team 1', 'Team 2', 'Team 3'];
// const members = [
//   { name: 'Name 1', nickname: 'Nickname 1', description: 'Description 1' },
//   { name: 'Name 2', nickname: 'Nickname 2', description: 'Description 2' },
//   { name: 'Name 3', nickname: 'Nickname 3', description: 'Description 3' }
// ];
export function Home() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar title='My AppBar' />
      <Paper style={muiTheme.wrapper}>
        <Paper>
          <Subheader>Teams</Subheader>
          <List>
            {teams.map(name => (
              <ListItem leftAvatar={<Avatar alt={`Avatar n°${name}`} src={`/public/images/avatar/${name}.jpg`} />}>
                {name}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Paper>
    </MuiThemeProvider>
  );
}
