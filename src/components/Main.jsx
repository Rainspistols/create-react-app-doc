import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import AboutDocs from './chapters/AboutDocs';

const Main = () => {
  return (
    <MainStyled>
      <Switch>
        <Route path='/documentation-intro'>
          <AboutDocs />
        </Route>
      </Switch>
    </MainStyled>
  );
};

const MainStyled = styled.main`
width: 100%;
`;

export default Main;
