import styled, { css } from 'styled-components'
import { PropTypes } from '.'

export const Line = styled.span`
  background: ${(props) => props.theme.color.white};
  border-radius: 5px;
  display: block;
  height: 2px;
  position: relative;
  transition: all 0.3s ease;
  width: 100%;

  &:nth-child(2),
  &:nth-child(3) {
    margin-top: 6px;
  }
`

export const Button = styled.button<PropTypes>`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 48px;
  padding: 0;
  position: fixed;
  width: 48px;
  z-index: 2;

  ${(props) => props.active === 'true' && buttonActive}

  &:hover {
    ${Line} {
      background: ${(props) => props.theme.color.primary};
    }
  }
`

const buttonActive = css`
  ${Line} {
    &:nth-child(1) {
      opacity: 0;
    }

    &:nth-child(2) {
      margin-top: 0px;
      top: 6px;
      transform: rotate(135deg);
    }

    &:nth-child(3) {
      margin-top: 0px;
      top: 2px;
      transform: rotate(45deg);
    }
  }
`
