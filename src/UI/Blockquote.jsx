import React from 'react';
import styled from '@emotion/styled/macro';

const Blockquote = ({ children }) => {
  return <BlockquoteStyled>{children}</BlockquoteStyled>;
};

const BlockquoteStyled = styled.blockquote`
  margin: 0 0 16px;
  padding: 16px;

  color: rgb(106, 115, 125);
  ${({ theme }) => theme.typography.normal};

  border-left: 6px solid #606770;

  code {
    ${({ theme }) => theme.defaultStyles.code};
  }
`;

export default Blockquote;
