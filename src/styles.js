import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrangeA400, grey900, pink500 } from 'material-ui/styles/colors';

export default getMuiTheme({
  colors: {
    primary: deepOrangeA400,
    dark: grey900
  },
  palette: {
    textColor: grey900
  },
  appBar: {
    color: deepOrangeA400,
    height: 50
  },
  rowPaper: {
    padding: '20px 0 20px 0',
    display: 'flex',
    flexFlow: 'wrap row'
  },
  avatar: {
    objectFit: 'cover',
    objectPosition: '1 0'
  },
  teams: {
    padding: '10px',
    margin: '10px',
    flex: '1 1 0px'
  },
  members: {
    padding: '10px',
    margin: '10px',
    flex: '1 1 0px'
  },
  addWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexFlow: 'wrap row',
    width: '100%'
  },
  title: {
    width: '50%'
  },
  flatButton: {
    primaryTextColor: deepOrangeA400,
    secondaryTextColor: pink500
  }
});
