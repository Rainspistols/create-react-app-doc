import React from 'react';
import styled from '@emotion/styled';

const ChapterH2 = ({ children, anchorId }) => {
  return (
    <ChapterH2Styled>
      <a
        className='hash-link'
        href={'#' + anchorId}
        id={anchorId}
        title='Direct link to heading'
      >
        #
      </a>
      {children}
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
`;

export default ChapterH2;
