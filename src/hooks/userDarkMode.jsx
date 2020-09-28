import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [themeColor, setThemeColor] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('themeColor', mode);
    setThemeColor(mode);
  };

  const toggleThemeColor = () => {
    if (themeColor === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localThemeColor = window.localStorage.getItem('themeColor');
    if (localThemeColor) {
      setThemeColor(localThemeColor);
    } else {
      setMode('light');
    }

    setComponentMounted(true);
  }, []);

  return [themeColor, toggleThemeColor, componentMounted];
};
