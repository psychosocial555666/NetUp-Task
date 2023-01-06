import styled, { keyframes } from 'styled-components';
import { INavigationListStyle } from './NavigationList.types';

const fidein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const NavList = styled.nav`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const List = styled.ul<INavigationListStyle>`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    transition: all 1s ease-in-out;
    display: ${props => (props.toggled ? 'flex' : 'none')};
    animation: ${fidein} ease-in-out;
    animation-duration: 0.5s;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    right: 0%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const NavToggle = styled.button`
  display: none;
  padding: 16px;
  margin: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: none;
  transition: background 0.3s ease-in-out;
  background: none;
  color: #ffffff;
  font-size: 24px;
  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.35);
  }
  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  display: flex;
  padding: 13px 25px;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease-in-out;
  svg {
    margin-right: 8px;
  }
  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.35);
  }
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;
