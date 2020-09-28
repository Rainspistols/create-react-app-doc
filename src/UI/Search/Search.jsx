import React from 'react';
import styled from '@emotion/styled';

const Search = () => {
  return (
    <SearchStyled>
      <input type='search' placeholder='Search' autoComplete='off' />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  box-sizing: border-box;
  padding-left: 16px;

  input {
    padding: 0 8px 0 36px;
    width: 200px;

    font-size: 14px;
    line-height: 2;
    outline: none;
    color: ${({ theme }) => theme.color.searchText};
    background-color: ${({ theme }) => theme.color.searchBg};

    font-weight: 500;

    border-radius: 32px;

    border: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="currentColor" alt="Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16px" width="16px"><path d="M6.02945,10.20327a4.17382,4.17382,0,1,1,4.17382-4.17382A4.15609,4.15609,0,0,1,6.02945,10.20327Zm9.69195,4.2199L10.8989,9.59979A5.88021,5.88021,0,0,0,12.058,6.02856,6.00467,6.00467,0,1,0,9.59979,10.8989l4.82338,4.82338a.89729.89729,0,0,0,1.29912,0,.89749.89749,0,0,0-.00087-1.29909Z" /></svg>');
    background-repeat: no-repeat;
    background-position: 12px 50%;
    background-size: 16px 16px;

    appearance: none;
    cursor: text;
    display: block;

    ::placeholder {
      opacity: 0.3;
    }
  }
`;

export default Search;
