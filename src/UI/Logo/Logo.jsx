import React from 'react';
import styled from '@emotion/styled';
import logo from './logo.svg';

const Logo = () => {
  return (
    <StyledLogo href='https://create-react-app.dev/'>
      <img src={logo} alt='' height='32' />
      Create React App
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 17px;
  line-height: 2;
  color: ${({ theme }) => theme.color.text};

  img {
    height: 32px;
    margin-right: 8px;
  }
`;

export default Logo;
