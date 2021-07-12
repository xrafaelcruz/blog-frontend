import styled from 'styled-components'
import { defaultStyles } from 'styles/global'

export const Layout = styled.div`
  align-items: center;
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

  @media (max-width: 920px) {
    padding: 58px 0 40px;
  }

  ${defaultStyles}
`

export const Header = styled.header`
  transition: all 250ms;
  width: 100%;
  z-index: 20;

  @media (max-width: 920px) {
    background: ${(props) => props.theme.color.secondary};
    border-bottom: 1px solid rgb(50 51 49 / 50%);
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

  @media (max-width: 920px) {
    max-width: 100%;
    padding: 0;
  }
`

export const Right = styled.aside``
