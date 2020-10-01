import React from 'react';
import styled from '@emotion/styled';
import EditPageAndUpdated from '../UI/EditPageAndUpdated';
import ChapterTitle from '../UI/ChapterTitle';
import ChapterPagination from '../UI/ChapterPagination';

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
  return (
    <ChapterWrapperStyled>
      <ChapterTitle>{chapterName}</ChapterTitle>
      {children}
      <EditPageAndUpdated by={updatedBy} date={updatedDate} href={href} />
      <ChapterPagination
        nextHref={nextHref}
        nextTitle={nextTitle}
        previousHref={previousHref}
        previousTitle={previousTitle}
      />
    </ChapterWrapperStyled>
  );
};

const ChapterWrapperStyled = styled.div`
  padding: 32px 16px;
  max-width: 1140px;
  margin: 0 auto;

  color: ${({ theme }) => theme.color.chapterPageText};
`;

export default ChapterWrapper;
