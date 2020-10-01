import React from 'react';
import styled from '@emotion/styled';

const EditPageAndUpdated = ({ href, date, by }) => {
  return (
    <EditPageAndUpdatedStyled>
      <div className='edit-page'>
        <svg
          height='1.2em'
          width='1.2em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 40 40'
        >
          <g>
            <path d='m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z'></path>
          </g>
        </svg>

        <a className='edit-page__text' href={href}>
          Редактировать эту страницу
        </a>
      </div>
      {date && by && (
        <p className='last-update'>
          Последние обновление <strong>{date}</strong> сделанно <strong>{by}</strong>
        </p>
      )}
    </EditPageAndUpdatedStyled>
  );
};

const EditPageAndUpdatedStyled = styled.div`
  ${({ theme }) => theme.flex.between};

  margin: 80px 0;

  color: ${({theme})=>theme.color.text};

  :hover .edit-page__text,
  :focus .edit-page__text {
    text-decoration: underline;
  }

  .edit-page {
    cursor: pointer;

    svg {
      margin-right: 0.3em;
      vertical-align: sub;

      path {
        fill: ${({ theme }) => theme.defaultColor.green};
      }
    }

    .edit-page__text {
      color: ${({ theme }) => theme.defaultColor.green};
      ${({ theme }) => theme.typography.normal};
    }
  }

  .last-update {
    font-style: italic;
  }
`;

export default EditPageAndUpdated;
