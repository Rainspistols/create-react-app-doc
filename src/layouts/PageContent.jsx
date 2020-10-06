import React from 'react';
import styled from '@emotion/styled/macro';

const PageContent = ({ children }) => {
  return <PageContentStyled>{children}</PageContentStyled>;
};

const PageContentStyled = styled.article`
  p {
    ${({ theme }) => theme.typography.normal};
    margin-bottom: 24px;

    code {
      ${({ theme }) => theme.defaultStyles.code};
    }
  }

  a {
    color: ${({ theme }) => theme.defaultColor.green};

    cursor: pointer;

    :hover,
    :focus {
      text-decoration: underline;
    }
  }

  .code-block {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding: 16px;

    font-size: 12px;
    line-height: 17px;
    color: rgb(191, 199, 213);

    border-radius: 5px;
    background-color: rgb(41, 45, 62);
  }

  blockquote {
    margin: 0 0 16px;
    padding: 16px;

    color: rgb(106, 115, 125);
    ${({ theme }) => theme.typography.normal};

    border-left: 6px solid #606770;

    code {
      ${({ theme }) => theme.defaultStyles.code};
    }
  }
`;

export default PageContent;
