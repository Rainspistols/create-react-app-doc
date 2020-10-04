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
  defaultColor: {
    green: 'rgb(9, 211, 172)',
  },
  typography: {
    normal: {
      fontSize: '17px',
      lineHeight: '25px',
    },
  },
  defaultStyles: {
    code: {
      padding: '3.2px 6.4px',
      color: 'rgb(245, 246, 247)',
      fontSize: '14px',
      lineHeight: '21px',
      backgroundColor: 'rgb(28, 30, 33)',
      borderRadius: '5px',
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
    mainWrapper: 'white',
    leftNav: 'rgb(96, 103, 112)',
    chapterPageText: 'rgb(28, 30, 33)',
    navLeftBorder: '1px solid rgba(218, 221, 225, 1);',
    navLeftSvg: `url('data:image/svg+xml;utf8,<svg alt="Arrow" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgb(96, 103, 112)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>')`,
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
    mainWrapper: '#121212',
    leftNav: 'rgb(218, 221, 225)',
    chapterPageText: 'rgb(245, 246, 247)',
    navLeftBorder: '1px solid rgba(218, 221, 225, 0.5);',
    navLeftSvg: `url('data:image/svg+xml;utf8,<svg alt="Arrow" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgba(255,255,255,0.6)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>')`,
  },
  styles: {
    switcher: {
      left: '27px',
      border: '1px solid #19ab27',
    },
  },
};
