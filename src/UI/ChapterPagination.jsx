import React from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

const ChapterPagination = ({
  nextHref,
  nextTitle,
  previousHref,
  previousTitle,
}) => {
  return (
    <ChapterPaginationStyled>
      <div className='paginationContainer paginationContainer-previous'>
        {previousHref && previousTitle && (
          <Link to={'/' + previousHref + '/'} className='pagination-link'>
            <p>Предыдущий раздел</p>
            <p className='chapterTitle'>{'« ' + previousTitle}</p>
          </Link>
        )}
      </div>

      <div className='paginationContainer paginationContainer-next'>
        {nextHref && nextTitle && (
          <Link to={'/' + nextHref + '/'} className='pagination-link'>
            <p>Следующий раздел</p>
            <p className='chapterTitle'>{nextTitle + ' »'}</p>
          </Link>
        )}
      </div>
    </ChapterPaginationStyled>
  );
};

const ChapterPaginationStyled = styled.div`
  ${({ theme }) => theme.flex.between};
  align-items: stretch;
  color: ${({ theme }) => theme.color.text};
  margin: 32px 0;

  .paginationContainer {
    flex-grow: 1;
    max-width: 50%;
    flex-basis: 50%;

    :hover .pagination-link,
    :focus .pagination-link {
      border: 1px solid ${({ theme }) => theme.defaultColor.green};
    }

    .pagination-link {
      display: block;

      padding: 16px;
      border-radius: 10px;

      height: 100%;
      box-sizing:border-box;

      border: ${({ theme }) => theme.color.navLeftBorder};
    }

    .chapterTitle {
      color: ${({ theme }) => theme.defaultColor.green};
      font-weight: 600;
      font-size: 14px;
      line-height: 1.2;
      margin-top: 4px;
    }
  }

  .paginationContainer-next {
    margin-left: 16px;

    .pagination-link {
      text-align: right;
    }
  }
`;

export default ChapterPagination;
