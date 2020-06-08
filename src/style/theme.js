import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let themeObject = createMuiTheme({
  palette: {
    primary: {
      main: "#C8003A",
    },
    secondary: {
      main: "#870085",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      root: {
        borderRadius: 8,
      },
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      '"Open Sans"',
      '"Garamond"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    h1: {
      fontFamily: "Garamond",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Garamond",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Garamond",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Garamond",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Garamond",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Garamond",
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: "Garamond",
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
});

// Make fonts responsive
themeObject = responsiveFontSizes(themeObject);

export { themeObject };
