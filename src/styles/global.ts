import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* latin */
  @font-face {
    font-family: 'Special Elite';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/specialelite/v11/XLYgIZbkc4JPUL5CVArUVL0ntnAOSFNuQsI.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    background: #494a48;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
  }
`

export const defaultStyles = css`
  p {
    color: ${(props) => props.theme?.color.gray};
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.primary};
    font-weight: 300;
    line-height: 3rem;

    @media (max-width: 920px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    color: ${(props) => props.theme?.color.gray};
    font-size: 2.2rem;
    font-family: ${(props) => props.theme.font.primary};
    font-weight: 400;

    @media (max-width: 920px) {
      font-size: 2rem;
    }
  }

  h1 {
    line-height: 4rem;

    @media (max-width: 920px) {
      line-height: 3.8rem;
    }
  }

  h1,
  h2 {
    color: ${(props) => props.theme.color.white};
    font-family: ${(props) => props.theme.font.primary};
    font-size: 3.2rem;

    @media (max-width: 920px) {
      font-size: 3rem;
    }
  }

  time {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 1.6rem;
    font-weight: 400;
  }
`

export default GlobalStyles
