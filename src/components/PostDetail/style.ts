import styled from 'styled-components'
import HTML from 'components/HTML'
import { PageWrapper } from 'components/Layout/style'

export const Wrapper = styled(PageWrapper)`
  align-items: flex-start;
`

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const Time = styled.time`
  align-self: flex-start;
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.primary};
  font-size: 1.6rem;
  font-weight: 300;
`

export const Content = styled(HTML)`
  margin-top: 8rem;
  max-width: 100%;
`
