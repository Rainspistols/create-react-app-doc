import React from 'react';
import styled from '@emotion/styled/macro';

const ChapterMainTitle = ({ children }) => {
  return <ChapterMainTitleStyled>{children}</ChapterMainTitleStyled>;
};

const ChapterMainTitleStyled = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 48px;
`;

export default ChapterMainTitle;
