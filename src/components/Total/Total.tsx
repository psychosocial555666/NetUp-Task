import React from 'react';
import { TotalContainer, TotalText } from './Total.styles';

const Total: React.FC<{ length: number }> = ({ length }) => {
  return (
    <TotalContainer>
      <TotalText>TV Shows ({length})</TotalText>
    </TotalContainer>
  );
};

export default Total;
