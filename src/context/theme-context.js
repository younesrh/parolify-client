import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../style/theme";

import {
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
  StylesProvider,
} from "@material-ui/core";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import GlobalStyle from "../style/global-style";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      <StylesProvider injectFirst>
        <MUIThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <SCThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <CssBaseline />
            <GlobalStyle />
            {children}
          </SCThemeProvider>
        </MUIThemeProvider>
      </StylesProvider>
    </ThemeContext.Provider>
  );
};
