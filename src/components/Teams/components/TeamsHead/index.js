import React from 'react';
import { deepOrangeA400, red50 } from 'material-ui/styles/colors';
import { Subheader, RaisedButton } from 'material-ui';
import Add from 'material-ui/svg-icons/content/add';

import theme from '../../../../styles';

export function TeamsHead({ onOpen }) {
  return (
    <div style={theme.addWrapper}>
      <Subheader style={theme.title}>Teams</Subheader>
      <RaisedButton
        onClick={onOpen}
        labelColor={red50}
        backgroundColor={deepOrangeA400}
        label='Add team'
        style={theme.addButton}
        icon={<Add />}
      />
    </div>
  );
}
