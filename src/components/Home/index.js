import React, { useState, Fragment } from 'react';
import {
  Card,
  Paper,
  Tabs,
  Tab,
  List,
  ListItemText,
  ListItem,
  Avatar,
  ListItemAvatar,
  Typography,
  Button,
  AppBar
} from '@material-ui/core';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Add } from '@material-ui/icons';

import { Row, TitleRow } from '../../styles';
import { useStyles } from './styles';

function Home() {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const teams = ['Team 1', 'Team 2', 'Team 3'];
  const members = [
    { name: 'Name 1', nickname: 'Nickname 1', description: 'Description 1' },
    { name: 'Name 2', nickname: 'Nickname 2', description: 'Description 2' },
    { name: 'Name 3', nickname: 'Nickname 3', description: 'Description 3' }
  ];
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Card className={classes.root}>
        <AppBar color='secondary' position='static'>
          <TitleRow>
            <Typography>Team tasks</Typography>
            <Tabs indicatorColor='secondary' value={value} onChange={handleChange} aria-label='disabled tabs example'>
              <Tab label='Teams' />
              <Tab label='Tasks' />
              <Tab label='Settings' />
            </Tabs>
            <div />
          </TitleRow>
        </AppBar>
        {value === 0 && (
          <Row>
            <Paper className={classes.teams}>
              <TitleRow>
                <Typography className={classes.title} component='span' variant='h5' color='textPrimary'>
                  Your teams
                </Typography>

                {/* <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
                <Add />
              </Fab> */}
              </TitleRow>
              <List>
                {teams.map((name, index) => (
                  <ListItem button key={name}>
                    <ListItemAvatar>
                      <Avatar alt={`Avatar n°${name}`} src={`/public/images/avatar/${name}.jpg`} />
                    </ListItemAvatar>
                    <ListItemText primary={name} />
                  </ListItem>
                ))}
              </List>
              <Button color='primary'>Add new team</Button>
            </Paper>
            <Paper className={classes.members}>
              <TitleRow>
                <Typography className={classes.title} component='span' variant='h4' color='textPrimary'>
                  Team members
                </Typography>
                <Button variant='outlined'>
                  <Add />
                  To invite
                </Button>
              </TitleRow>
              <List>
                {members.map((member, index) => (
                  <ListItem button key={member.name}>
                    <ListItemAvatar>
                      <Avatar alt={`Avatar n°${member.name}`} src={`/public/images/avatar/${member.name}.jpg`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={member.nickname}
                      secondary={
                        <Fragment>
                          <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
                            {member.name}
                          </Typography>
                          {` - ${member.description}`}
                        </Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Row>
        )}
        {value === 1 && <h2>Home 2</h2>}
        {value === 2 && <h2>Home 3</h2>}
      </Card>
    </MuiThemeProvider>
  );
}
export default Home;
