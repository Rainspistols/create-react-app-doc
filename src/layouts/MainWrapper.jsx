import React from 'react';
import styled from '@emotion/styled';
import Main from '../components/Main';
import LeftNav from '../components/LeftNav';
import { BrowserRouter as Router } from 'react-router-dom';

const MainWrapper = ({ headerHeight }) => {
  return (
    <MainWrapperStyled headerHeight={headerHeight}>
      <Router>
        <LeftNav headerHeight={headerHeight} />
        <Main />
      </Router>
    </MainWrapperStyled>
  );
};

const MainWrapperStyled = styled.div`
  display: flex;

  padding-top: ${(props) => props.headerHeight + 'px'};
  min-height: ${(props) => `calc(100vh - ${props.headerHeight}px)`};

  background-color: ${({theme})=>theme.color.mainWrapper};
`;

export default MainWrapper;
