import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import { useLocation } from 'react-router-dom';

const ChapterNavigation = ({ chapterContentRef }) => {
  const location = useLocation();
  const [dataNavH, setDataNavH] = useState();
  const [dataNavLink, setDataNavLink] = useState();
  const [activeNavLink, setActiveNavLink] = useState();

  const test = useCallback(() => {
    dataNavH &&
      setActiveNavLink(
        [...dataNavH].find((item) => item.getBoundingClientRect().top - 58 > 0)
      );
  }, [dataNavH]);

  useEffect(() => {
    test();
    window.addEventListener('scroll', test);

    return () => {
      window.removeEventListener('scroll', test);
    };
  }, [dataNavH, test]);

  useEffect(() => {
    setDataNavH(chapterContentRef.current.querySelectorAll('.chapter-title'));
    setDataNavLink(chapterContentRef.current.querySelectorAll('a.anchor'));
  }, [location.pathname, chapterContentRef]);

  return (
    <ChapterNavigationStyled
      className='chapter-navigation'
      onScroll={() => test()}
    >
      <ul>
        {dataNavH &&
          [...dataNavH].map((item, index) => (
            <li key={index}>
              <a
                className={
                  activeNavLink && activeNavLink.innerText === item.innerText
                    ? 'link active-link'
                    : 'link'
                }
                href={'#' + [...dataNavLink][index].id}
              >
                {item.innerText}
              </a>
            </li>
          ))}
      </ul>
    </ChapterNavigationStyled>
  );
};

const ChapterNavigationStyled = styled.nav`
  position: sticky;
  top: 58px;

  flex-shrink: 0;

  overflow-y: auto;

  height: 100%;
  width: 25%;
  padding: 20px 0 0 16px;

  ul {
    border-left: ${({ theme }) => theme.color.navLeftBorder};
    padding-left: 20px;
    font-size: 13px;
    line-height: 19px;

    li {
      margin: 8px;

      color: ${({ theme }) => theme.color.leftNav};
      font-weight: 600;

      :hover,
      :focus {
        color: ${({ theme }) => theme.defaultColor.green};
      }
    }
  }

  .link {
    white-space: nowrap;
  }

  .active-link {
    color: ${({ theme }) => theme.defaultColor.green};
  }
`;

export default ChapterNavigation;
