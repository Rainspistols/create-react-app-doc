import React from 'react';
import styled from '@emotion/styled';
import Logo from '../UI/Logo/Logo';
import NavMenu from './NavMenu';
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher';
import Search from '../UI/Search/Search';

const Header = ({ toggleThemeColor }) => {
  return (
    <StyledHeader>
      <Logo />
      <NavMenu />
      <ThemeSwitcher toggleThemeColor={toggleThemeColor} />
      <Search />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;

  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;

  background-color: ${({ theme }) => theme.color.header};

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

export default Header;
