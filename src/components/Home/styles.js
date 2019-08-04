import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    position: 'relative',
    background: '#ebebeb',
    height: '100%'
  },
  inline: {
    display: 'inline'
  },
  teams: {
    margin: '30px 20px 30px 20px',
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  },
  members: {
    margin: '30px 20px 30px 20px',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  },
  title: {
    margin: '0 0 0 20px'
  },
  fab: {
    // width: '20px',
    // height: '5px',
    // margin: '5px',
    alignSelf: 'flex-end'
  }
});
