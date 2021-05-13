import styled from 'styled-components'

export const Main = styled.main`
  align-items: center;
  background: url('/main-bg.jpg') no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  &:before {
    background: inherit;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    content: '';
    filter: blur(10px);
    left: -15px;
    position: absolute;
    right: -15px;
    top: -15px;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

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

export const PageContent = styled.section`
  max-width: 75vw;
  padding: 200px 0 140px;
  width: 100%;

  @media (max-width: 640px) {
    max-width: 90vw;
  }
`
