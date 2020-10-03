import React from 'react';
import styled from '@emotion/styled/macro';

const ChapterParagraph = ({ children }) => {
  return <ChapterParagraphStyled>{children}</ChapterParagraphStyled>;
};

const ChapterParagraphStyled = styled.p`
  ${({ theme }) => theme.typography.normal};
  margin-bottom: 24px;
`;

export default ChapterParagraph;
