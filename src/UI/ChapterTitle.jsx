import React from 'react';
import styled from '@emotion/styled/macro';

const ChapterTitle = ({ children, anchorId, as = 'h2', text }) => {
  return (
    <ChapterContainerStyled
      className='chapter-title'
      data-link-to-anchor={'#' + anchorId}
      data-tag={as}
    >
      <a id={anchorId} className='link-to-anchor visually-hidden' href='/#' />
      <a href={'#' + anchorId} className='anchor'>
        <HStyled className='title'>{children}</HStyled>
      </a>
    </ChapterContainerStyled>
  );
};

const ChapterContainerStyled = styled.div`
  position: relative;

  margin-bottom: 12px;
  margin-top: 60px;

  :hover,
  :focus,
  :hover code,
  :focus code {
    text-decoration: underline;
    color: ${({ theme }) => theme.defaultColor.green};
  }

  :hover .title::before,
  :focus .title::before {
    display: block;
  }

  .link-to-anchor {
    position: absolute;
    top: -65px;
  }

  code {
    ${({ theme }) => theme.defaultStyles.code};
    ${({ theme }) => theme.styles.code};
    font-size: 24px;
    line-height: 24px;
  }
`;

const HStyled = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  ::before {
    position: absolute;
    left: 0;
    top: 0;
    content: '#';
    transform: translateX(-120%);
    display: none;
    font-weight: 900;
  }
`;

export default ChapterTitle;
