import React from 'react';
import styled from '@emotion/styled/macro';

const data = [
  {
    title: 'DOCS',
    href: 'https://create-react-app.dev/docs/getting-started/',
  },
  { title: 'Help', href: 'https://reactjs.org/community/support.html' },
  { title: 'Github', href: 'https://github.com/facebook/create-react-app' },
];

const NavMenu = () => {
  return (
    <NavMenuStyled>
      <ul>
        {data.map(({ title, href }, index) => (
          <li key={index}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </NavMenuStyled>
  );
};

const NavMenuStyled = styled.nav`
  margin-right: 0;
  margin-left: auto;

  font-weight: 500;
  font-size: 17px;
  color: ${({ theme }) => theme.color.text};

  ul {
    display: flex;

    li {
      padding: 4px 16px;

      :hover,
      :focus {
        color: rgb(9, 211, 172);
      }
    }
  }
`;

export default NavMenu;
