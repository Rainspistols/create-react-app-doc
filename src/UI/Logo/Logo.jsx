import React from 'react';
import styled from '@emotion/styled';
import logo from './logo.svg';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt='' height='32' />
      Create React App
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  font-weight: 600;
  font-size: 17px;
  display: flex;

  img {
    height: 32px;
  }
`;

export default Logo;
