import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

const ThemeSwitcher = ({ toggleThemeColor }) => {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef();

  const themeContainerHandle = () => {
    toggleThemeColor();
    inputRef.current.focus();
    setFocused(true);
  };

  const onBlurCheckbox = () => {
    setFocused(false);
  };

  return (
    <ThemeSwitcherStyled onClick={themeContainerHandle} isFocused={isFocused}>
      <div className='moon theme-types'>
        <span />
      </div>
      <div className='sun theme-types'>
        <span />
      </div>
      <div className='toggle-thumb' />
      <input
        type='checkbox'
        className='visually-hidden'
        onChange={themeContainerHandle}
        ref={inputRef}
        onBlur={onBlurCheckbox}
      />
    </ThemeSwitcherStyled>
  );
};

const ThemeSwitcherStyled = styled.div`
  position: relative;

  width: 50px;
  height: 24px;

  background-color: red;
  border-radius: 30px;
  background-color: #4d4d4d;

  transition: all 0.2s ease;
  cursor: pointer;

  .theme-types {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 14px;
    height: 10px;
    ${({ theme }) => theme.flex.center};
  }

  .moon {
    left: 5px;
    span {
      &::before {
        content: '\\1F31C';
      }
    }
  }
  .sun {
    right: 5px;
    span {
      &::before {
        content: '\\1F31E';
      }
    }
  }

  .toggle-thumb {
    position: absolute;
    top: 1px;
    ${({ theme }) => theme.styles.switcher};

    width: 22px;
    height: 22px;

    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;

    transition: all 0.2s ease;

    box-shadow: ${(props) => (props.isFocused ? '0 0 2px 3px #0099e0;' : '')};
  }

  .toggle-thumb:active {
    box-shadow: 0 0 5px 5px #0099e0;
  }
`;

export default ThemeSwitcher;
