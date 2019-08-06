import React, { useState, Fragment } from 'react';
import { AppBar, Drawer, MenuItem, Divider, Subheader } from 'material-ui';
import Group from 'material-ui/svg-icons/social/group';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Help from 'material-ui/svg-icons/action/help';

export function Header({ title }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <Fragment>
      <AppBar onLeftIconButtonClick={handleClick} title={title} />
      <Drawer docked={false} onRequestChange={handleClose} open={open}>
        <Subheader>Menu</Subheader>
        <MenuItem href='/teams' primaryText='Teams' leftIcon={<Group />} />
        <MenuItem href='/tasks' primaryText='Tasks' leftIcon={<Assignment />} />
        <Divider />
        <MenuItem href='/tasks' primaryText='Help' leftIcon={<Help />} />
      </Drawer>
    </Fragment>
  );
}
