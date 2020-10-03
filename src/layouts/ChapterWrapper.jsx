import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import EditPageAndUpdated from '../UI/EditPageAndUpdated';
import ChapterTitle from '../UI/ChapterTitle';
import ChapterPagination from '../UI/ChapterPagination';
import ChapterNavigation from '../UI/ChapterNavigation';

const ChapterWrapper = ({
  children,
  updatedBy,
  updatedDate,
  chapterName,
  href,
  previousTitle,
  previousHref,
  nextTitle,
  nextHref,
}) => {
  const chapterContentRef = useRef();
  useEffect(() => {
    document.title = chapterName;
  }, [chapterName]);

  return (
    <ChapterWrapperStyled>
      <div className='chapter-content' ref={chapterContentRef}>
        <ChapterTitle>{chapterName}</ChapterTitle>
        {children}
        <EditPageAndUpdated by={updatedBy} date={updatedDate} href={href} />
        <ChapterPagination
          nextHref={nextHref}
          nextTitle={nextTitle}
          previousHref={previousHref}
          previousTitle={previousTitle}
        />
      </div>

      <ChapterNavigation chapterContentRef={chapterContentRef} />
    </ChapterWrapperStyled>
  );
};

const ChapterWrapperStyled = styled.div`
  display: flex;

  max-width: 1140px;
  margin: 0 auto;

  color: ${({ theme }) => theme.color.chapterPageText};

  .chapter-content {
    padding: 32px 16px;
  }
`;

export default ChapterWrapper;
