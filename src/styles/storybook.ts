import styled, { css } from 'styled-components'
import { defaultStyles } from './global'

export const wrapperStyle = css`
  background: ${(props) => props.theme.color.dark};
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  padding: 50px;
`

export const Wrapper = styled.div`
  ${wrapperStyle}
  align-items: center;
  justify-content: center;

  ${defaultStyles}
`

export const WrapperAlignedLeft = styled.div`
  ${wrapperStyle}
  width: 100%;
`
