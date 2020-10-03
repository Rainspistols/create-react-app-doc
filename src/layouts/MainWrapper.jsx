import React from 'react';
import styled from '@emotion/styled/macro';
import Main from '../components/Main';
import LeftNav from '../components/LeftNav';

const MainWrapper = ({ headerHeight }) => {
  return (
    <MainWrapperStyled headerHeight={headerHeight}>
      <LeftNav headerHeight={headerHeight} />
      <Main />
    </MainWrapperStyled>
  );
};

const MainWrapperStyled = styled.div`
  display: flex;

  margin-top: ${(props) => props.headerHeight + 'px'};
  min-height: ${(props) => `calc(100vh - ${props.headerHeight}px)`};

  background-color: ${({ theme }) => theme.color.mainWrapper};
`;

export default MainWrapper;
