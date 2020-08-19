import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* user-select: none; */
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  * {
    transition: all ease-in-out 200ms;
    font-family: 'Open Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    /* overflow-y: auto; */
    height: 100%;
  }
  body {
    
    font-size: 15px;
    height: 100%;
    overflow-x: hidden !important;
    margin: 0;    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    overflow-y: scroll !important;
    cursor: default;
    font-family: "Open Sans", "Garamond", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .text-highlight{
    color: ${({ theme }) => theme.palette.secondary.main};
    text-decoration: underline;
  }

  span {
    font-family: inherit;
  }
  .page{
    padding-top: 128px;
    min-height: calc(100vh - 220px);
    position: relative;
    .hero-title {
      text-align: center;
      padding-bottom: 24px;
    }
  }


`;

export default GlobalStyle;
