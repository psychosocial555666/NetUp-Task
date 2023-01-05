import styled from 'styled-components';
import { ISearchStyle } from './Search.types';

export const SearchContainer = styled.section<ISearchStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.focused ? "120px 0 56px" : "250px 0 0"};
  transition: padding 0.3s ease-in-out;
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
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 14px 24px;
  width: 976px;
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
`;

export const SearchInputLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
`;
