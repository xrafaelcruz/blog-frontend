import styled, { css } from 'styled-components'

type NavProps = {
  active: string
}

export const Wrapper = styled.div`
  height: 48px;
  width: 48px;
`

const navActive = css`
  opacity: 1;
  pointer-events: auto;
  transform: translate3D(0, 0, 0);
  visibility: visible;
`

export const Nav = styled.nav<NavProps>`
  align-items: center;
  background: ${(props) => props.theme.color.secondary};
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  height: 100vh;
  left: 0;
  opacity: 0;
  padding: 64px 16px;
  position: fixed;
  pointer-events: none;
  top: 0;
  transform: translate3D(0, -50px, 0);
  transition: 0.3s;
  visibility: hidden;
  width: 100vw;
  z-index: 1;

  ${(props) => props.active === 'true' && navActive}

  a {
    color: ${(props) => props.theme.color.light};
    font-size: 4rem;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.color.primary};
    }

    @media (max-width: 920px) {
      font-size: 3.8rem;
    }
  }
`
