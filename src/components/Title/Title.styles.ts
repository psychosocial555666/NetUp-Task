import styled, { keyframes } from 'styled-components';

const fidein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const TitleContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 0;
  animation: ${fidein} ease-in-out;
  animation-duration: 0.5s;
`;

export const TitleText = styled.p`
  display: flex;
  font-family: 'Ubuntu';
  font-weight: 700;
  padding: 0;
  margin: 0;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #ffffff;
`;
