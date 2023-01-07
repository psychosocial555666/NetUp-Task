import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
  position: relative;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0px 72px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: flex-end;
    padding: 0px 30px;
  }
`;

export const MainLink = styled.a`
  display: flex;
  @media (max-width: 1200px) {
    margin-right: auto;
  }
`;
