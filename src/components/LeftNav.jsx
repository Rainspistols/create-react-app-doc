import React from 'react';
import styled from '@emotion/styled';
import NavMenuGroup from '../UI/NavMenuGroup/NavMenuGroup';

const LeftNav = ({ headerHeight }) => {
  const data = [
    {
      groupName: 'Добро пожаловать',
      chapters: [{ name: 'О документации', href: '/documentation-intro/' }],
    },
    {
      groupName: 'С чего начать?',
      chapters: [
        { name: 'С чего начать?', href: '/getting-started/' },
        { name: 'Cтруктура папок', href: '/folder-structure/' },
        { name: 'Доступные скрипты', href: '/available-scripts/' },
        {
          name: 'Поддерживаемые Браузеры и Функции',
          href: '/supported-browsers-features/',
        },
        {
          name: 'Обновлении до новых релизов',
          href: '/updating-to-new-releases/',
        },
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

  display: inline-block;
  min-width: 300px;
  overflow-y: auto;
  height: calc(100vh - ${(props) => props.headerHeight + 'px'});

  scrollbar-width: auto;

  border-right: ${({ theme }) => theme.color.navLeftBorder};

  .groups-list {
    padding: 8px;
    margin: 4px 0;
  }
`;

export default LeftNav;
