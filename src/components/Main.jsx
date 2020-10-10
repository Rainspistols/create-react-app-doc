import React from 'react';
import styled from '@emotion/styled/macro';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import AboutDocs from './chapters/AboutDocs';
import ChapterWrapper from '../layouts/ChapterWrapper';
import GettingStarted from './chapters/GettingStarted';
import FolderStructure from './chapters/FolderStructure';
import AvailableScripts from './chapters/AvailableScripts';
import SupportedBrowsersFeatures from './chapters/SupportedBrowsersFeatures';
import UpdatingToNewReleases from './chapters/UpdatingToNewReleases';
import EditorSetup from './chapters/EditorSetup';
import DevelopingComponentsInIsolation from './chapters/DevelopingComponentsInIsolation';
import AnalyzingTheBundleSize from './chapters/AnalyzingTheBundleSize';
import UsingHttpsInDevelopment from './chapters/UsingHttpsInDevelopment';
import AddingStylesheets from './chapters/AddingStylesheets';
import AddingCSSModules from './chapters/AddingCSSModules';
import AddingSassStylesheets from './chapters/AddingSassStylesheets';

const Main = () => {
  const location = useLocation();

  const chapterData = [
    {
      slug: '/documentation-intro/',
      updatedBy: 'Dan Abramov',
      updatedDate: '10/20/2018',
      chapterName: 'О документации',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/documentation-intro.md',
      nextTitle: 'С чего начать?',
      nextHref: 'getting-started',
    },
    {
      slug: '/getting-started/',
      updatedBy: 'Lewis Llobera',
      updatedDate: '2/13/2020',
      chapterName: 'О документации',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/documentation-intro.md',
      nextTitle: 'Структура папок',
      nextHref: 'folder-structure',
      previousTitle: 'О документации',
      previousHref: 'documentation-intro',
    },
    {
      slug: '/folder-structure/',
      updatedBy: 'Lewis Llobera',
      updatedDate: '2/13/2020',
      chapterName: 'Структура папки',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/folder-structure.md',
      nextTitle: 'Доступные скрипты',
      nextHref: 'available-scripts',
      previousTitle: 'О документации',
      previousHref: 'getting-started',
    },
    {
      slug: '/available-scripts/',
      updatedBy: 'Lewis Llobera',
      updatedDate: '2/13/2020',
      chapterName: 'Особенности поддерживаемых браузеров',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/available-scripts.md',
      nextTitle: 'Особенности поддерживаемых браузеров',
      nextHref: 'supported-browsers-features',
      previousTitle: 'Доступные скрипты',
      previousHref: 'folder-structure',
    },
    {
      slug: '/supported-browsers-features/',
      chapterName: 'Особенности поддерживаемых браузеров',
      updatedBy: 'Evan Grim',
      updatedDate: '1/16/2020',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/supported-browsers-features.md',
      nextTitle: 'Обновление до новых версий',
      nextHref: 'updating-to-new-releases',
      previousTitle: 'Доступные скрипты',
      previousHref: 'available-scripts',
    },
    {
      slug: '/updating-to-new-releases/',
      chapterName: 'Обновление до новых версий',
      updatedBy: 'Ben Carp',
      updatedDate: '1/20/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/updating-to-new-releases.md',
      nextTitle: 'Настройка вашего редактора кода',
      nextHref: 'setting-up-your-editor',
      previousTitle: 'Особенности поддерживаемых браузеров',
      previousHref: 'supported-browsers-features',
    },
    {
      slug: '/setting-up-your-editor/',
      chapterName: 'Настройка редактора кода',
      updatedBy: 'Brody McKee',
      updatedDate: '3/1/2020',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/setting-up-your-editor.md',
      nextTitle: 'Разработка компонентов в изоляции',
      nextHref: 'developing-components-in-isolation',
      previousTitle: 'Обновление до новых версий',
      previousHref: 'updating-to-new-releases',
    },
    {
      slug: '/developing-components-in-isolation/',
      chapterName: 'Разработка компонентов в изоляции',
      updatedBy: 'Ian Sutherland',
      updatedDate: '10/24/2019',
      href:
        'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/developing-components-in-isolation.md',
      nextTitle: 'Анализ размера пакета',
      nextHref: 'analyzing-the-bundle-size',
      previousTitle: 'Настройка редактора кода',
      previousHref: 'setting-up-your-editor',
    },
    {
      slug: '/analyzing-the-bundle-size/',
      chapterName: 'Анализ размера пакета',
      updatedBy: 'Ioannis Cherouvim',
      updatedDate: '2/22/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/analyzing-the-bundle-size.md',
      nextTitle: 'Использование HTTPS в разработке',
      nextHref: 'using-https-in-development',
      previousTitle: 'Разработка компонентов в изоляции',
      previousHref: 'developing-components-in-isolation',
    },
    {
      slug: '/using-https-in-development/',
      chapterName: 'Использование HTTPS в разработке',
      updatedBy: 'Kanitkorn Sujautra',
      updatedDate: '2/20/2020',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/using-https-in-development.md',
      nextTitle: 'Добавление таблиц стилей',
      nextHref: 'adding-a-stylesheet',
      previousTitle: 'Анализ размера пакета',
      previousHref: 'analyzing-the-bundle-size',
    },
    {
      slug: '/adding-a-stylesheet/',
      chapterName: 'Добавление таблиц стилей',
      updatedBy: 'Lewis Llobera',
      updatedDate: '2/13/2020',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/adding-a-stylesheet.md',
      nextTitle: 'Добавление модулей CSS',
      nextHref: 'adding-a-css-modules-stylesheet',
      previousTitle: 'Использование HTTPS в разработке',
      previousHref: 'using-https-in-development',
    },
    {
      slug: '/adding-a-css-modules-stylesheet/',
      chapterName: 'Добавление модулей CSS',
      updatedBy: 'Hardo',
      updatedDate: '1/4/2019',
      href:
        'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/adding-a-css-modules-stylesheet.md',
      nextTitle: 'Добавление таблиц стилей Sass',
      nextHref: 'adding-a-sass-stylesheet',
      previousTitle: 'Добавление таблиц стилей',
      previousHref: 'adding-a-stylesheet',
    },
    {
      slug: '/adding-a-sass-stylesheet/',
      chapterName: 'Добавление таблиц стилей Sass',
      updatedBy: 'Monish',
      updatedDate: '3/24/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/adding-a-sass-stylesheet.md',
      nextTitle: 'Добавление CSS Reset',
      nextHref: 'adding-css-reset',
      previousTitle: 'Добавление модулей CSS',
      previousHref: 'adding-a-css-modules-stylesheet',
    },
    {
      slug: '/adding-css-reset/',
      chapterName: 'Добавление CSS Reset',
      updatedBy: 'Hrusikesh Panda',
      updatedDate: '4/5/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/adding-css-reset.md',
      nextTitle: 'Постобработка CSS',
      nextHref: 'post-processing-css',
      previousTitle: 'Добавление таблиц стилей Sass',
      previousHref: 'adding-a-sass-stylesheet',
    },
    {
      slug: '/post-processing-css/',
      chapterName: 'Постобработка CSS',
      updatedBy: 'Endi',
      updatedDate: '10/15/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/post-processing-css.md',
      nextTitle: 'Добавление изображений, шрифтов и файлов',
      nextHref: 'adding-images-fonts-and-files',
      previousTitle: 'Добавление CSS Reset',
      previousHref: 'adding-css-reset',
    },
    {
      slug: '/adding-images-fonts-and-files/',
      chapterName: 'Добавление изображений, шрифтов и файлов',
      updatedBy: 'Lewis Llobera',
      updatedDate: '2/13/2020',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/adding-images-fonts-and-files.md',
      nextTitle: 'Загрузка файлов .graphql',
      nextHref: 'loading-graphql-files',
      previousTitle: 'Постобработка CSS',
      previousHref: 'post-processing-css',
    },
    {
      slug: '/loading-graphql-files/',
      chapterName: 'Загрузка файлов .graphql',
      updatedBy: 'nagman',
      updatedDate: '4/30/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/loading-graphql-files.md',
      nextTitle: 'Использование общей папки',
      nextHref: 'using-the-public-folder',
      previousTitle: 'Добавление изображений, шрифтов и файлов',
      previousHref: 'adding-images-fonts-and-files',
    },
    {
      slug: '/using-the-public-folder/',
      chapterName: 'Использование общей папки',
      updatedBy: 'nagman',
      updatedDate: '4/30/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/using-the-public-folder.md',
      nextTitle: 'Разделение кода',
      nextHref: 'code-splitting',
      previousTitle: 'Загрузка файлов .graphql',
      previousHref: 'loading-graphql-files',
    },
    {
      slug: '/code-splitting/',
      chapterName: 'Разделение кода',
      updatedBy: 'Hugo David-Boyet',
      updatedDate: '10/16/2019',
      href: 'https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/code-splitting.md',
      nextTitle: 'Установка зависимости',
      nextHref: 'installing-a-dependency',
      previousTitle: 'Использование общей папки',
      previousHref: 'using-the-public-folder',
    },
  ];

  const dataForCertainChapter = chapterData.find((item) => item.slug === location.pathname);

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

          <Route path='/folder-structure/'>
            <FolderStructure />
          </Route>

          <Route path='/available-scripts/'>
            <AvailableScripts />
          </Route>

          <Route path='/supported-browsers-features/'>
            <SupportedBrowsersFeatures />
          </Route>

          <Route path='/updating-to-new-releases/'>
            <UpdatingToNewReleases />
          </Route>

          <Route path='/setting-up-your-editor/'>
            <EditorSetup />
          </Route>

          <Route path='/developing-components-in-isolation/'>
            <DevelopingComponentsInIsolation />
          </Route>

          <Route path='/analyzing-the-bundle-size/'>
            <AnalyzingTheBundleSize />
          </Route>

          <Route path='/using-https-in-development/'>
            <UsingHttpsInDevelopment />
          </Route>

          <Route path='/adding-a-stylesheet/'>
            <AddingStylesheets />
          </Route>

          <Route path='/adding-a-css-modules-stylesheet/'>
            <AddingCSSModules />
          </Route>

          <Route path='/adding-a-sass-stylesheet/'>
            <AddingSassStylesheets />
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
  padding: 0 20px;

  border-left: ${({ theme }) => theme.color.navLeftBorder};
`;

export default Main;
