import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
