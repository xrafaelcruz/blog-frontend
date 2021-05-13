import styled from 'styled-components'
import HTML from 'components/HTML'

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const Time = styled.time`
  color: ${(props) => props.theme.color.gray};
  font-family: ${(props) => props.theme.font.primary};
  font-size: 1.6rem;
  font-weight: 300;
`

export const Content = styled(HTML)`
  margin-top: 8rem;
  max-width: 100%;
`
