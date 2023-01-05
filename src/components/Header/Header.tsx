import React from 'react';
import { MainLogo } from '../../common/Icons/Icons';
import NavigationControls from '../NavigationControls/NavigationControls';
import NavigationList from '../NavigationList/NavigationList';
import { HeaderContainer, StyledHeader } from './Header.styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <MainLogo />
        <NavigationList />
        <NavigationControls />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
