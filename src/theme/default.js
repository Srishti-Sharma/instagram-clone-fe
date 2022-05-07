import GrandHotelRegular from "../../public/assets/fonts/GrandHotel-Regular";

const base = {
  palette: {
    type: "light",
    brand: {
      main: "#F8B815",
      contrastText: "#000000",
      navbar: "#2E65A7",
    },
    primary: {
      main: RIVIAN_BLUE_COLOR,
      light: "#BFDFE9",
      medium: "#28588E",
      faded: "#96B2D2",
      midFaded: "rgba(137, 165, 197, 0.7)",
    },
    secondary: {
      main: "#F8B815",
      contrastText: "#000000",
    },
    selected: {
      main: RIVIAN_BLUE_COLOR,
    },
    gray: {
      input: "#979797",
      faded: "#EBEBEB",
      neutral: "#C4C4C4",
      light: "#E5E5E5",
      main: "#6A6A6A",
      medium: "#949292",
      dark: "#D7D7D7",
      midDark: "#666666",
      darker: "#D9D9D9",
      suva: "#949292",
      shark: "#F0F1F0",
      contrastText: "#505050",
      lighter: "#EFEDE8",
      midLight: "#6B6B6B",
      grayMain: "#6B6B6B",
      grayLightDark: "#505050",
      systemGray: "#4F4F4F",
      bodyText: "#898989",
      lightBackground: "#F8F8F8",
      lighterBackground: "#FAFAFA",
      lightFade: "#808080",
      lightText: "#767676",
      border: "#D8D8D8",
    },
    success: {
      main: "#4CAF50",
      light: "#E6F6EB",
      medium: "#47B881",
    },
    error: {
      main: "#F03B3B",
      light: "#F8D9D9",
      dark: "#D00000",
      secondary: "#FAE6E6",
      medium: "#C72121",
      bgColor: "rgba(208, 0, 0, 0.04)",
      border: "#D0000080",
    },
    warning: {
      main: "#FF9800",
      light: "#FFF1DC",
      primary: "#FFB100",
      medium: "#E85C0E",
      icon: "#FFB53F",
    },
    info: {
      main: "#2196f3",
      light: "#F4F4F4",
      medium: "rgba(0, 0, 0, 0.5)",
    },
    details: {
      light: "#F7D15466",
      medium: "#A57405",
    },
    white: {
      light: "#FEFEFE",
      main: PURE_WHITE,
      dark: "#F5F5F5",
      grayish: "#F3F3F3",
      pale: "#F0F1F3",
      lightGray: "#F9F9F9",
      ghost: "#FDFDFD",
    },
    black: {
      main: "#000000",
      light: "#151515",
    },
    pink: {
      main: "rgba(248, 75, 75, 0.25)",
    },
    yellow: {
      main: "rgba(255, 217, 20, 0.25)",
    },
    green: {
      main: "rgba(0, 164, 55, 0.25)",
      light: "#00A437",
    },
    blue: {
      main: "blue",
      link: RIVIAN_BLUE_COLOR,
      light: "#DFE7F1",
    },
    grid: {
      main: "#EAF0F6",
      highlight: PURE_WHITE,
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontSize: 12,
    h4: {
      fontSize: 34,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 18,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle0: {
      fontSize: 12,
    },
    subtitle3: {
      fontSize: "16px",
      lineHeight: "16px",
    },
    body: {
      fontSize: 12,
    },
    paragraph: {
      fontSize: 22,
    },
    paragraph1: {
      fontSize: 20,
    },
    title1: {
      fontSize: 28,
    },
    subtitle4: {
      fontSize: 10,
    },
    subtitle5: {
      fontSize: 8,
    },
    fontFamily: [
      GrandHotelRegular,
      larsseitRegular.fontFamily,
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [larsseitRegular],
      },
    },
  },
  zIndex: {
    base: 0,
  },
};

const component = {
  // Button

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        justifyContent: "space-evenly",
        padding: "8px 16px",
        lineHeight: 1,
      },
      sizeSmall: {
        fontSize: "12px",
      },
      sizeLarge: {
        padding: "10.5px 14px",
      },
      iconSizeMedium: {
        "& > *:first-child": {
          fontSize: 16,
        },
      },
      outlined: {
        padding: "7px 15px",
      },
      outlinedPrimary: {
        justifyContent: "space-evenly",
        border: `1px solid ${base.palette.primary.main}`,
        "&:hover": {
          border: `1px solid ${base.palette.primary.main}`,
        },
      },
      outlinedSecondary: {
        border: `1px solid ${base.palette.error.border}`,
        color: base.palette.error.dark,
        "&:hover": {
          border: `1px solid ${base.palette.error.border}`,
          color: base.palette.error.dark,
          backgroundColor: base.palette.error.bgColor,
        },
      },
      textSecondary: {
        padding: "8px 16px",
        justifyContent: "space-between",
        border: `1px solid ${base.palette.gray.main}`,
        "&:hover": {
          border: `1px solid ${base.palette.gray.main}`,
          backgroundColor: "transparent",
        },
        color: base.palette.gray.main,
      },
      colorInherit: {
        color: base.palette.primary.main,
        backgroundColor: base.palette.primary.light,
        "&:hover": {
          color: base.palette.primary.main,
          backgroundColor: base.palette.primary.light,
        },
      },
    },
  },
};
const theme = createMuiTheme({ component });
export default theme;
