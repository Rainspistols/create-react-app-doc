import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import { useLocation } from 'react-router-dom';

const ChapterNavigation = ({ chapterContentRef }) => {
  const location = useLocation();
  const [activeNavLink, setActiveNavLink] = useState();
  const [dataNav, setDataNav] = useState();

  useEffect(() => {
    const allH = chapterContentRef.current.querySelectorAll('.chapter-title');
    setDataNav(
      [...allH].map((item) => ({
        innerHTML: item.querySelector('.title').innerHTML,
        textContent: item.querySelector('.title').textContent,
        tag: item.dataset.tag,
        linkToAnchor: item.dataset.linkToAnchor,
        node: item,
      }))
    );
  }, [location.pathname, chapterContentRef]);

  const checkWhatLinkIsVisible = useCallback(() => {
    dataNav &&
      setActiveNavLink(
        dataNav.find((item) => item.node.getBoundingClientRect().top - 58 > 0)
      );
  }, [dataNav]);

  useEffect(() => {
    checkWhatLinkIsVisible();
    window.addEventListener('scroll', checkWhatLinkIsVisible);

    return () => {
      window.removeEventListener('scroll', checkWhatLinkIsVisible);
    };
  }, [dataNav, checkWhatLinkIsVisible]);

  return (
    <ChapterNavigationStyled
      className='chapter-navigation'
      onScroll={checkWhatLinkIsVisible}
    >
      <ul>
        {dataNav &&
          dataNav.map(
            ({ innerHTML, textContent, tag, linkToAnchor }, index) => (
              <li key={index} className={tag}>
                <a
                  className={
                    activeNavLink &&
                    activeNavLink.node.innerText === textContent
                      ? 'link active-link'
                      : 'link'
                  }
                  href={linkToAnchor}
                  dangerouslySetInnerHTML={{ __html: innerHTML }}
                />
              </li>
            )
          )}
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
  box-sizing: border-box;

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

    code {
      ${({ theme }) => theme.defaultStyles.code};
      ${({ theme }) => theme.styles.code};
      font-size: inherit;
      line-height: inherit;
    }
  }

  .active-link {
    color: ${({ theme }) => theme.defaultColor.green};
  }

  .h3 {
    padding-left: 20px;
  }

  .h4 {
    padding-left: 40px;
  }
`;

export default ChapterNavigation;
