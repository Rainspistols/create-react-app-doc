import React from 'react';
import styled from '@emotion/styled/macro';

const ChapterH2 = ({ children, anchorId, as = 'h2' }) => {
  return (
    <ChapterH2Styled as={as}>
      <a
        className='hash-link'
        href={'#' + anchorId}
        title='Direct link to heading'
      >
        #
      </a>
      <a
        id={anchorId}
        className='anchor visually-hidden'
        aria-label={anchorId}
        href='/#'
      >
        {anchorId}
      </a>
      <span className='chapter-title'>{children}</span>
    </ChapterH2Styled>
  );
};

const ChapterH2Styled = styled.h2`
  position: relative;

  display: block;

  margin-bottom: 12px;
  margin-top: 60px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  :hover .hash-link,
  :focus .hash-link {
    display: block;
  }

  .hash-link {
    position: absolute;
    left: -20px;

    display: none;

    padding-right: 20px;

    color: ${({ theme }) => theme.defaultColor.green};

    :hover,
    :focus {
      text-decoration: underline;
    }
  }

  .anchor {
    top: -60px;
  }

  
`;

export default ChapterH2;
