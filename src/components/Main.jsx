import React from 'react';
import styled from '@emotion/styled/macro';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import AboutDocs from './chapters/AboutDocs';
import ChapterWrapper from '../layouts/ChapterWrapper';

const Main = () => {
  const location = useLocation();

  const chapterData = [
    {
      slug: '/documentation-intro/',
      updatedBy: 'Dan Abramov',
      updatedDate: '10/20/2018',
      chapterName: 'О документации',
      href:
        'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/documentation-intro.md',
      nextTitle: 'С чего начать?',
      nextHref: 'getting-started',
    },
    {
      slug: '/getting-started/',
    },
  ];

  const dataForCertainChapter = chapterData.find(
    (item, index) => item.slug === location.pathname
  );

  return (
    <MainStyled>
      <ChapterWrapper {...dataForCertainChapter}>
        <Switch>
          <Route path='/documentation-intro/'>
            <AboutDocs />
          </Route>

          <Route path='/getting-started/'>
            <>
              <h1>test1</h1>
              <h2>test2</h2>
            </>
          </Route>

          <Route path='/'>
            <Redirect to='/getting-started/' />
          </Route>
        </Switch>
      </ChapterWrapper>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  width: 100%;

  border-left: ${({ theme }) => theme.color.navLeftBorder};
`;

export default Main;
