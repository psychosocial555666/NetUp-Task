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
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 56px;
  margin: 0;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
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
