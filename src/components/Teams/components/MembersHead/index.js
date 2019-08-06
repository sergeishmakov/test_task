import React from 'react';
import { Subheader, RaisedButton } from 'material-ui';
import Add from 'material-ui/svg-icons/content/add';

import theme from '../../../../styles';

export function MembersHead({ onClick }) {
  return (
    <div style={theme.addWrapper}>
      <Subheader style={theme.title}>Team members</Subheader>{' '}
      <RaisedButton onClick={onClick} label='Invite to team' secondary style={theme.addButton} icon={<Add />} />
    </div>
  );
}
