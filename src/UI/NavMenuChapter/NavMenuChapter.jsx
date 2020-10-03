import React, { useRef } from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const NavMenuChapter = ({ chapterName, href }) => {
  const location = useLocation();

  const linkRef = useRef();

  return (
    <NavMenuChapterStyled>
      <Link
        ref={linkRef}
        to={href}
        className={href === location.pathname ? 'active-chapter' : ''}
      >
        {chapterName}
      </Link>
    </NavMenuChapterStyled>
  );
};

const NavMenuChapterStyled = styled.li`
  font-size: 14px;
  line-height: 1.4;

  cursor: pointer;

  a {
    display: block;

    padding: 6px 16px;
    margin: 4px 0;

    :hover,
    :focus {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
  }

  .active-chapter {
    color: rgb(9, 211, 172);

    :hover,
    :focus {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
  }
`;

export default NavMenuChapter;
