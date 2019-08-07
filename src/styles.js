import { createMuiTheme } from '@material-ui/core/styles';

import { Monza, BlazeOrange } from './variables/colors';

export default createMuiTheme({
  palette: {
    primary: { main: BlazeOrange },
    secondary: { main: Monza }
  }
});
