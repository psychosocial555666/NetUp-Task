import React from 'react';
import { DiscoverIcon, LiveTVIcon, MoviesIcon, MyStuffIcon, TVShowsIcon } from '../../common/Icons/Icons';
import { List, NavItem, NavLink, NavList } from './NavigationList.styles';

const navigationTemplate = [
  {
    title: 'Discover',
    icon: <DiscoverIcon />,
  },
  {
    title: 'Live TV',
    icon: <LiveTVIcon />,
  },
  {
    title: 'TV Shows',
    icon: <TVShowsIcon />,
  },
  {
    title: 'Movies',
    icon: <MoviesIcon />,
  },
  {
    title: 'My Stuff',
    icon: <MyStuffIcon />,
  },
];

const NavigationList: React.FC = () => {
  return (
    <NavList>
      <List>
        {navigationTemplate.map(item => (
          <NavItem key={item.title} >
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
