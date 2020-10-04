import React from 'react';
import styled from '@emotion/styled/macro';

const Code = ({ children }) => {
  return <CodeStyled>{children}</CodeStyled>;
};

const CodeStyled = styled.code`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 16px;

  font-size: 12px;
  line-height: 17px;
  color: rgb(191, 199, 213);

  border-radius: 5px;
  background-color: rgb(41, 45, 62);
`;

export default Code;
