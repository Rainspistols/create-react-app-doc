import React from 'react';
import styled from '@emotion/styled';

const ChapterLink = ({ children, href }) => {
  return (
    <ChapterLinkStyled>
      <a href={href}>{children}</a>
    </ChapterLinkStyled>
  );
};

const ChapterLinkStyled = styled.strong`
  color: ${({ theme }) => theme.defaultColor.green};

  cursor: pointer;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export default ChapterLink;
