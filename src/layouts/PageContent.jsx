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
      ${({ theme }) => theme.styles.code};
    }
  }

  blockquote {
    margin: 0 0 16px;
    padding: 16px;

    color: rgb(106, 115, 125);
    ${({ theme }) => theme.typography.normal};

    border-left: 6px solid #606770;

    code {
      ${({ theme }) => theme.defaultStyles.code};
      ${({ theme }) => theme.styles.code};
    }
  }

  .img-center {
    margin: 0 auto;
  }

  ul,
  ol,
  li {
    list-style: revert;
    padding: revert;
  }

  ul,ol {
    margin-bottom: 24px;

    li {
      ${({ theme }) => theme.typography.normal};
      margin-bottom: 4px;

      code {
        ${({ theme }) => theme.defaultStyles.code};
        ${({ theme }) => theme.styles.code};
      }
    }
  }
`;

export default PageContent;
