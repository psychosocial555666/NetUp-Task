import styled from 'styled-components';

export const NavList = styled.nav`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  display: flex;
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
  };
  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.1);
  };
  &:active {
    background: rgba(255, 255, 255, 0.35);
  };
`;
