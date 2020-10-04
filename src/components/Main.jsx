import React from 'react';
import styled from '@emotion/styled/macro';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import AboutDocs from './chapters/AboutDocs';
import ChapterWrapper from '../layouts/ChapterWrapper';
import GettingStarted from './chapters/GettingStarted';

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
      updatedBy: 'Lewis Llobera',
      updatedDate: '2/13/2020',
      chapterName: 'О документации',
      href:
        'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/documentation-intro.md',
      nextTitle: 'Структура папок',
      nextHref: 'folder-structure',
      previousTitle: 'О документации',
      previousHref: 'documentation-intro',
    },
  ];

  const dataForCertainChapter = chapterData.find(
    (item) => item.slug === location.pathname
  );

  return (
    <MainStyled>
      <ChapterWrapper {...dataForCertainChapter}>
        <Switch>
          <Route path='/documentation-intro/'>
            <AboutDocs />
          </Route>

          <Route path='/getting-started/'>
            <GettingStarted />
          </Route>

          <Route path='/' exact>
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
