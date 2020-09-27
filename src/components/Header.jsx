import React from 'react';
import styled from '@emotion/styled';
import Logo from '../UI/Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;

export default Header;
