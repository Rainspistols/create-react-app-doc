import React from 'react';
import styled from '@emotion/styled/macro';

import { HashLink as Link } from 'react-router-hash-link';

const ChapterLink = ({ children, href, isLink }) => {
  return isLink ? (
    <ChapterLinkStyled as={Link} to={href}>
      {children}
    </ChapterLinkStyled>
  ) : (
    <ChapterLinkStyled href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </ChapterLinkStyled>
  );
};

const ChapterLinkStyled = styled.a`
  color: ${({ theme }) => theme.defaultColor.green};

  cursor: pointer;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export default ChapterLink;
