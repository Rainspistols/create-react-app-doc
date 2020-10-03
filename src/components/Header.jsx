import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import Logo from '../UI/Logo/Logo';
import NavMenu from './NavMenu';
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher';
import Search from '../UI/Search/Search';

const Header = ({ toggleThemeColor, controlHeaderHeight }) => {
  const headerRef = useRef();

  useEffect(() => {
    controlHeaderHeight(headerRef.current.clientHeight);
  }, [controlHeaderHeight]);

  return (
    <StyledHeader ref={headerRef}>
      <Logo />
      <NavMenu />
      <ThemeSwitcher toggleThemeColor={toggleThemeColor} />
      <Search />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;

  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;

  background-color: ${({ theme }) => theme.color.header};

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

export default Header;
