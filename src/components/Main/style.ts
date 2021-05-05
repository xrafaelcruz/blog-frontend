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
`
export const Content = styled.section`
  max-width: 75vw;
  padding: 200px 0 140px;
  width: 100%;

  @media (max-width: 640px) {
    max-width: 90vw;
  }
`
