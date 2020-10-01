import React from 'react';
import styled from '@emotion/styled';

const ChapterTitle = ({ children }) => {
  return <ChapterTitleStyled>{children}</ChapterTitleStyled>;
};

const ChapterTitleStyled = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 48px;
`;

export default ChapterTitle;
