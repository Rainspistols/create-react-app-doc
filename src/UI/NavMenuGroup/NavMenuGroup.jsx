import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import NavMenuChapter from '../NavMenuChapter/NavMenuChapter';

import { useLocation } from 'react-router-dom';

const NavMenuGroup = ({ groupName, chapters }) => {
  const [isChaptersShown, showChapters] = useState(false);

  const match = useLocation();
  const chapterHrefsForActiveGroup = chapters.map((item) => item.href);

  useEffect(() => {
    if (chapters.map((item) => item.href).includes(match.pathname)) {
      showChapters(true);
    }
  }, [chapters, match.pathname]);

  const toggleChapters = () => {
    showChapters(!isChaptersShown);
  };

  return (
    <NavMenuGroupStyled isChaptersShown={isChaptersShown}>
      <div
        className={
          chapterHrefsForActiveGroup.includes(match.pathname)
            ? 'group active-group'
            : 'group'
        }
        onClick={toggleChapters}
      >
        {groupName}
      </div>

      {isChaptersShown && (
        <ul className='chapters-list'>
          {chapters.map(({ name, href }, index) => (
            <NavMenuChapter key={index} chapterName={name} href={href} />
          ))}
        </ul>
      )}
    </NavMenuGroupStyled>
  );
};

const NavMenuGroupStyled = styled.li`
  overflow-wrap: break-word;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.2;

  .chapters-list {
    margin-left: 16px;
    color: ${({ theme }) => theme.color.leftNav};
  }

  .group.active-group {
    color: ${({ theme }) => theme.defaultColor.green};
  }

  .group {
    position: relative;

    padding: 6px 16px;

    cursor: pointer;

    color: ${({ theme }) => theme.color.leftNav};

    :hover,
    :focus {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }

    ::after {
      content: ' ';
      position: absolute;
      right: 16px;

      height: 20px;
      width: 20px;

      background-image: ${({ theme }) => theme.color.navLeftSvg};
      background-size: 32px 32px;
      background-position: 50%;

      transition: all 0.2s ease;
      transform: ${({ isChaptersShown }) =>
        isChaptersShown ? 'scaleY(-1)' : 'scaleY(1)'};
    }
  }
`;

export default NavMenuGroup;
