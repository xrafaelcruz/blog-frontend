import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #000;
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

    @media (max-width: 720px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    color: ${(props) => props.theme?.color.gray};
    font-size: 2.2rem;
    font-family: ${(props) => props.theme.font.primary};
    font-weight: 400;

    @media (max-width: 720px) {
      font-size: 2rem;
    }
  }

  h1,
  h2 {
    color: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.font.primary};
    font-size: 3.2rem;
    text-transform: uppercase;
    margin-left: 0;
    margin-right: 0;
    width: 100%;

    @media (max-width: 720px) {
      font-size: 3rem;
    }
  }

  time {
    color: ${(props) => props.theme.color.gray};
    font-family: ${(props) => props.theme.font.primary};
    font-size: 1.6rem;
    font-weight: 300;
  }
`

export default GlobalStyles
