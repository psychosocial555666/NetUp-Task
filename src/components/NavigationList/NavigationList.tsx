import React from 'react';
import { navigationTemplate } from '../../common/const';
import { CloseMenuIcon, MenuIcon } from '../../common/Icons/Icons';
import { List, NavItem, NavLink, NavList, NavToggle } from './NavigationList.styles';

const NavigationList: React.FC = () => {
  const [toggled, setToggled] = React.useState(false);

  const toggleButtonClickHandler = () => setToggled(!toggled);

  return (
    <NavList>
      <NavToggle onClick={toggleButtonClickHandler}>{toggled ? <CloseMenuIcon /> : <MenuIcon />}</NavToggle>
      <List toggled={toggled}>
        {navigationTemplate.map(item => (
          <NavItem key={item.title}>
            <NavLink href='./'>
              {item.icon}
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </List>
    </NavList>
  );
};

export default NavigationList;
