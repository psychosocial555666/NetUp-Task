import styled from 'styled-components';

export const CardsSliderContainer = styled.section`
  position: relative;
  overflow-x: hidden;
  cursor: pointer;
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
  width: 368px;
  height: 335px;
  background-color: aquamarine;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  flex-shrink: 0;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
