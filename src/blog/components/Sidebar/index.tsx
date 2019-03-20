import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import Label from 'components/Label';
import LinkIconsBar from 'components/LinkIconsBar';

import { StyledSidebar, StyledSidebarHeader } from './styled';

export const Sidebar = (): JSX.Element => {
  return (
    <StyledSidebar>
      <Menu>
        <StyledSidebarHeader>
          <Label name="menu__header" />
        </StyledSidebarHeader>
        <Link to="/">
          &raquo; <Label name="menu_item__home"/>
        </Link>
        <Link to="about">
          &raquo; <Label name="menu_item__about"/>
        </Link>
        <Link to="talks">
          &raquo; <Label name="menu_item__talks"/>
        </Link>
        <Link to="archive">
          &raquo; <Label name="menu_item__archive"/>
        </Link>
        <LinkIconsBar />
      </Menu>
    </StyledSidebar>
  );
};

export default Sidebar;
