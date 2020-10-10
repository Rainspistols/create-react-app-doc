import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { useDarkMode } from './hooks/userDarkMode';
import { lightTheme, darkTheme } from './utils/theme';
import { BrowserRouter as Router } from 'react-router-dom';
// Components
import Header from './components/Header';
import GlobalStyles from './utils/GlobalStyles';
import MainWrapper from './layouts/MainWrapper';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  const [themeColor, toggleThemeColor, componentMounted] = useDarkMode();
  const [headerHeight, setHeaderHeight] = useState(0);

  const controlHeaderHeight = (header) => {
    setHeaderHeight(header);
  };

  return (
    componentMounted && (
      <ThemeProvider theme={themeColor === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <ScrollToTop />
          <Header
            toggleThemeColor={toggleThemeColor}
            controlHeaderHeight={controlHeaderHeight}
          />
          <MainWrapper headerHeight={headerHeight} />
          <Footer />
        </Router>
      </ThemeProvider>
    )
  );
}

export default App;
