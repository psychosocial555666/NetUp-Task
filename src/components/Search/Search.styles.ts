import styled, { keyframes } from 'styled-components';
import { ISearchStyle } from './Search.types';

const jump = keyframes`
  0% {
    padding-top: 250px;
  }
  50% {
    padding-top: 105px;
  }
  70% {
    padding-top: 125px;
  }
  100% {
    padding-top: 120px;
  }
`;

export const SearchContainer = styled.form<ISearchStyle>`
  display: flex;
  font-family: "Ubuntu";
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.focused ? "120px" : "250px"};
  transition: padding 0.3s ease-in-out;
  animation: ${props => props.focused && jump} ease-in-out;
  animation-duration: 0.5s;
  width: 1127px;
  max-width: 80%;
  margin: 0 auto;
  `;
  
  export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background: #09bb53;
  border-radius: 0px 4px 4px 0px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #abffce;
  cursor: pointer;
  font-family: "Ubuntu";
  transition: all 0.3s ease-in-out;
  &:disabled {
    background: none;
    outline: 1px solid #8F8F8F;
    color: #8F8F8F;
    svg {
      fill: color: #8F8F8F;
    }
  }
`;

export const ClearButton = styled.button<ISearchStyle>`
  display: ${props => props.focused ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  position: absolute; 
  top: 16px;
  right: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const SearchButtonText = styled.span`
  margin-right: 10px;
`;

export const SearchInput = styled.input<ISearchStyle>`
  display: flex;
  flex-grow: 1;
  font-family: "Ubuntu";
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 14px 24px;
  background: ${props => props.focused ? "#fff" : "rgba(255, 255, 255, 0.1)"};
  border-width: 1px 0px 1px 1px;
  border-radius: 4px 0px 0px 4px;
  font-size: 20px;
  line-height: 25px;
  border-color: #ffffff;
  color: ${props => props.focused ? "#232323" : "#6f6f6f"};
  outline: none;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #232323;
  }
  &:disabled {
    background-color: rgba(255, 255, 255, 0.1)
  }
`;

export const SearchInputLabel = styled.label`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
`;
