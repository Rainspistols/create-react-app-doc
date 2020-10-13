import React from 'react';
import styled from '@emotion/styled/macro';
import NavMenuGroup from '../UI/NavMenuGroup/NavMenuGroup';

const LeftNav = ({ headerHeight }) => {
  const data = [
    {
      groupName: 'Добро пожаловать',
      chapters: [{ name: 'О документации', href: '/documentation-intro' }],
    },
    {
      groupName: 'С чего начать?',
      chapters: [
        { name: 'С чего начать?', href: '/getting-started' },
        { name: 'Cтруктура папок', href: '/folder-structure' },
        { name: 'Доступные скрипты', href: '/available-scripts' },
        {
          name: 'Поддерживаемые Браузеры и Функции',
          href: '/supported-browsers-features',
        },
        {
          name: 'Обновлении до новых релизов',
          href: '/updating-to-new-releases',
        },
      ],
    },
    {
      groupName: 'Разработка',
      chapters: [
        { name: 'Настройки редактора кода', href: '/setting-up-your-editor' },
        {
          name: 'Разработка компонентов в изоляции',
          href: '/developing-components-in-isolation',
        },
        { name: 'Анализ размера пакета', href: '/analyzing-the-bundle-size' },

        {
          name: 'Использование HTTPS в разработке',
          href: '/using-https-in-development',
        },
      ],
    },
    {
      groupName: 'Cтили и внешние файлы',
      chapters: [
        { name: 'Добавление таблиц стилей', href: '/adding-a-stylesheet' },
        {
          name: 'Добавление модулей CSS',
          href: '/adding-a-css-modules-stylesheet',
        },
        { name: 'Добавление таблиц стилей Sass', href: '/adding-a-sass-stylesheet' },

        {
          name: 'Добавление CSS Reset',
          href: '/adding-css-reset',
        },
        {
          name: 'Постобработка CSS',
          href: '/post-processing-css',
        },
        {
          name: 'Добавление изображений, шрифтов и файлов',
          href: '/adding-images-fonts-and-files',
        },
        {
          name: 'Загрузка файлов .graphql',
          href: '/loading-graphql-files',
        },
        {
          name: 'Использование общей папки',
          href: '/using-the-public-folder',
        },
        {
          name: 'Разделение кода',
          href: '/code-splitting',
        },
      ],
    },
    {
      groupName: 'Создание(building) вашего приложения',
      chapters: [
        { name: 'Установка зависимостей', href: '/installing-a-dependency' },
        {
          name: 'Импортирование компонентов',
          href: '/importing-a-component',
        },
        { name: 'Использование глобальных переменных', href: '/using-global-variables' },

        {
          name: 'Добавление Bootstrap',
          href: '/adding-bootstrap',
        },
        {
          name: 'Добавление Flow',
          href: '/adding-flow',
        },
        {
          name: 'Добавление TypeScript',
          href: '/adding-typescript',
        },
        {
          name: 'Добавление Relay',
          href: '/adding-relay',
        },
        {
          name: 'Добавление Router',
          href: '/adding-a-router',
        },
        {
          name: 'Переменные среды',
          href: '/adding-custom-environment-variables',
        },
        {
          name: 'Создание прогрессивного веб-приложения',
          href: '/making-a-progressive-web-app',
        },
        {
          name: 'Создание production сборки',
          href: '/production-build',
        },
      ],
    },
    {
      groupName: 'Тестирование',
      chapters: [
        {
          name: 'Запуск тестов',
          href: '/running-tests',
        },
        { name: 'Отладочные тесты', href: '/debugging-tests' },
      ],
    },
  ];

  return (
    <LeftNavStyled headerHeight={headerHeight}>
      <ul className='groups-list'>
        {data.map(({ groupName, chapters }, index) => (
          <NavMenuGroup key={index} groupName={groupName} chapters={chapters} />
        ))}
      </ul>
    </LeftNavStyled>
  );
};

const LeftNavStyled = styled.aside`
  position: sticky;
  top: 58px;

  display: inline-block;
  min-width: 300px;
  overflow-y: auto;
  height: calc(100vh - ${(props) => props.headerHeight + 'px'});

  scrollbar-width: auto;

  .groups-list {
    padding: 8px;
    margin: 4px 0;
  }
`;

export default LeftNav;
