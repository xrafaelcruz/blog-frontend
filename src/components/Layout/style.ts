import styled from 'styled-components'
import { defaultStyles } from 'styles/global'

export const Layout = styled.div`
  align-items: center;
  background: ${(props) => props.theme.color.dark};
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 40px;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }

  ${defaultStyles}
`

export const Header = styled.header`
  transition: all 250ms;
  width: 100%;
  z-index: 20;

  @media (max-width: 640px) {
    background: ${(props) => props.theme.color.dark};
    box-shadow: ${(props) => `1px 1px 5px ${props.theme.color.secondary}`};
    left: 0;
    padding: 5px 15px;
    position: fixed;
    top: 0;
  }
`

export const Left = styled.aside``

export const Main = styled.main`
  max-width: calc(100% - 96px);
  padding: 0 40px;
  width: 100%;

  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0;
  }
`

export const Right = styled.aside``
