import styled, { keyframes } from 'styled-components';

const fidein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CardsSliderContainer = styled.section`
  position: relative;
  overflow-x: hidden;
  cursor: grab;
  animation: ${fidein} ease-in-out;
  animation-duration: 0.5s;
`;

export const CardsSliderList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 56px;
  margin: 0;
  position: relative;
  left: 0;
  transition: left 0.01s ease-in-out;
`;

export const CardsSliderItem = styled.li`
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
