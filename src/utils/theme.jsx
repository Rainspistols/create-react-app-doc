const defaultThemeProps = {
  media: {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 1280px)',
  },
  flex: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    between: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
};

export const lightTheme = {
  ...defaultThemeProps,
  color: {
    text: 'rgb(28, 30, 33)',
    header: 'white',
    searchText: 'rgb(68, 73, 80)',
    searchBg: 'rgb(235, 237, 240)',
  },
  styles: {
    switcher: {
      left: '1px',
      border: '1px solid #4d4d4d;',
    },
  },
};

export const darkTheme = {
  ...defaultThemeProps,
  color: {
    text: 'rgb(245, 246, 247)',
    header: 'rgb(30, 33, 37)',
    searchText: 'rgb(235, 237, 240)',
    searchBg: 'rgb(68, 73, 80)',
  },
  styles: {
    switcher: {
      left: '27px',
      border: '1px solid #19ab27',
    },
  },
};
