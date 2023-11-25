import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;

  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: white;
  border-bottom: 3px solid green;

`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  &.active {
    color: green;
  }
`;
