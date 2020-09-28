import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { lightTheme, darkTheme } from './utils/theme';
// Components
import Header from './components/Header';
import GlobalStyles from './utils/GlobalStyles';
import { useDarkMode } from './hooks/userDarkMode';

function App() {
  const [themeColor, toggleThemeColor, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeColor === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleThemeColor={toggleThemeColor} />
    </ThemeProvider>
  );
}

export default App;
