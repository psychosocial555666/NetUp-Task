import React from 'react';
import { AccountIcon, SearchIcon } from '../../common/Icons/Icons';
import { ControlButton, ControlsContainer, Marker } from './NavigationControls.styles';

const NavigationControls: React.FC = () => {
  return (
    <ControlsContainer>
      <ControlButton>
        <SearchIcon />
      </ControlButton>
      <ControlButton>
        <AccountIcon />
        <Marker show/>
      </ControlButton>
    </ControlsContainer>
  );
};

export default NavigationControls;
