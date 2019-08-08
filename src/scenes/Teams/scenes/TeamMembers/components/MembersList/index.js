import React from 'react';
import { List, Typography } from '@material-ui/core';

import { MembersListItem } from './components/MembersListItem';
import { Wrapper } from './styles';

export function MembersList({ members }) {
  return (
    <List>
      {members.length ? (
        members.map(member => <MembersListItem key={member.id} member={member} />)
      ) : (
        <Wrapper>
          <Typography variant='h6'>No one is in this team.</Typography>
        </Wrapper>
      )}
    </List>
  );
}
