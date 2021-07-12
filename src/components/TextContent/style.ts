import styled, { css } from 'styled-components'
import HTML from 'components/HTML'

const textStyle = css`
  color: ${(props) => props.theme?.color.gray};
  font-size: 2rem;
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 300;
  line-height: 3rem;
`

export const Content = styled(HTML)`
  margin-top: 8rem;
  max-width: 100%;

  div,
  li,
  p {
    ${textStyle}
    transition: color 250ms;

    &:hover {
      color: ${(props) => props.theme?.color.lightGray};
    }
  }

  a {
    ${textStyle}
    color: ${(props) => props.theme?.color.primary};
    transition: filter 250ms;

    &:hover {
      filter: brightness(0.8);
    }
  }

  ul {
    padding-left: 40px;
  }

  code {
    background: #20232a;
    border-radius: 5px;
    color: ${(props) => props.theme?.color.green};
    padding: 2px 10px;
  }

  .language-javascript,
  .language-plaintext {
    background: ${(props) => props.theme?.color.secondary};

    display: block;
    font-size: 1.5rem;
    margin: 10px 0;
    overflow: auto;
    padding: 20px;
  }

  figure {
    align-items: center;
    background: ${(props) => props.theme?.color.secondary};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    padding: 10px;

    a {
      font-size: 0;
      line-height: 0;
    }
  }

  img {
    border-radius: 5px;
    margin: auto;
    max-width: 100%;
  }

  .text-big {
    color: ${(props) => props.theme?.color.lightGray};
    font-size: 2.6rem;

    @media (max-width: 920px) {
      font-size: 2.4rem;
    }
  }
`
