import React from 'react';
import styled from '@emotion/styled/macro';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const CodeBlock = ({ children }) => {
  const [copyData, setCopyData] = useState();
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    setCopyData(
      [...codeLinesWrap.current.children]
        .map((item) => item.innerText)
        .join(' \n')
    );
  }, []);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  const onBtnClick = () => {
    navigator.clipboard.writeText(copyData);
    setCopied(true);
  };

  const codeLinesWrap = useRef();

  return (
    <CodeBlockStyled>
      <button
        onClick={onBtnClick}
        className='copy-btn'
        type='button'
        aria-label='Copy code to clipboard'
      >
        {isCopied ? 'Copied' : 'Copy'}
      </button>
      <div className='code-lines-wrap' ref={codeLinesWrap}>
        {children}
      </div>
    </CodeBlockStyled>
  );
};

const CodeBlockStyled = styled.div`
  position: relative;

  margin-bottom: 24px;
  padding: 16px;

  font-size: 12px;
  line-height: 17px;
  color: rgb(191, 199, 213);
  font-weight: 600;

  border-radius: 5px;
  background-color: rgb(41, 45, 62);

  .code-lines-wrap {
    display: flex;
    flex-direction: column;
  }

  :hover .copy-btn,
  :focus .copy-btn {
    opacity: 1;
  }

  .copy-btn {
    position: absolute;
    top: 16px;
    right: 16px;

    padding: 4px 8px;

    color: rgb(214, 222, 235);
    font-size: 11px;
    line-height: 12px;
    outline-color: rgb(214, 222, 235);

    background: #011627;
    border-radius: 5px;
    border: 1px solid #d6deeb;

    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export default CodeBlock;
