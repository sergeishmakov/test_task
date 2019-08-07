import { styled } from '@material-ui/styles';
import { Toolbar, AppBar } from '@material-ui/core';

import { ElectricViolet } from '../../../../variables/colors';

export const Tools = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const TeamsAppBar = styled(AppBar)({
  background: ElectricViolet
});
