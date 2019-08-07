import { styled } from '@material-ui/styles';
import { Toolbar, AppBar } from '@material-ui/core';

import colors from '../../../../variables/colors';

export const Tools = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});
export const TeamsAppBar = styled(AppBar)({
  background: colors.ElectricViolet
});
