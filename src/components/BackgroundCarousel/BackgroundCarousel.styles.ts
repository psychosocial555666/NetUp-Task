import styled, { keyframes } from 'styled-components';
import { IImage } from './BackgroundCarousel.types';

const fade = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Image = styled.div<IImage>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(35, 35, 35, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props => props.active ? 1 : 0};
  background-position: (0, 0);
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${props => props.active && fade} linear;
  animation-duration: 5.1s;
  background-image: url(${props => props.src || ''});
  `;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  rigth: 0;
`;
