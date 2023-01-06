import styled, { keyframes } from 'styled-components';
import { IImageStatsStyle, IImageStyle } from './Card.types';

const jump = keyframes`
  0% {
    top: 200%;
  }
  50% {
    top: 45%;
  }
  70% {
    top: 54%;
  }
  100% {
    top: 50%;
  }
`;

export const CardItem = styled.div`
  position: relative;
  display: flex;
  font-family: "Ubuntu";
  flex-direction: column;
  width: 368px;
  user-select: none;
  overflow: hidden;
  `;
  
  export const CardImage = styled.div<IImageStyle>`
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  height: 208px;
  border-radius: 4px;
  margin-bottom: 16px;
  background: url(${props => `../api/${props.poster}`}) no-repeat, url(${props =>
  `../api/${props.keyframe}`}) no-repeat;
  background-size: cover, cover;
  background-position: 0 ${props => (props.hovered ? '300px' : '0')}, 0 0;
  transition: background 0.5s ease-in-out;
  &::before {
    content: "";
    background-color: ${props => (props.hovered ? 'rgba(35, 35, 35, 0.8);' : 'rgba(35, 35, 35, 0.5);')}
    transition: background 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  `;

export const CardButton = styled.button<IImageStatsStyle>`
  display: ${props => (props.hovered ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 16px 31px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #abffce;
  background: none;
  border-radius: 4px;
  font-weight: 400;
  cursor: pointer;
  font-size: 20px;
  line-height: 25px;
  color: #abffce;
  animation: ${props => props.hovered && jump} ease-in-out;
  animation-duration: 0.7s;
  transition: background 0.2s ease-in-out;
  &:hover,
  &:focus {
    background: #09bb53;
  }
`;

export const CardButtonText = styled.span`
  white-space: nowrap;
  margin-right: 10px;
`;

export const CardStats = styled.div<IImageStatsStyle>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  position: absolute;
  z-index: 2;
  transition: top 0.5s ease-in-out;
  top: ${props => (props.hovered ? '-100px' : '0')};
  left: 0;
`;

export const CardStat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  color: #ffffff;
  width: 133px;
  height: 28px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-right: 16px;
`;

export const NewStat = styled(CardStat)`
  background: #de8b0f;
`;

export const RatingStat = styled(CardStat)`
  background: #09bb53;
`;

export const CardText = styled.p`
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0 0 4px;
`;

export const CardTitle = styled(CardText)`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;

export const CardParametres = styled(CardText)`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #a6a6a6;
`;

export const CardGenres = styled(CardText)`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;
