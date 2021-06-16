import styled from 'styled-components'
import HTML from 'components/HTML'

export const Title = styled.h1`
  text-align: center;
`

export const Photo = styled.img`
  border-radius: 50%;
  height: 200px;
  margin: 2rem auto;
  object-fit: cover;
  width: 200px;
`

export const Description = styled.h2`
  && {
    font-size: 2.2rem;
    font-weight: 400;
    text-align: center;
  }
`

export const Content = styled(HTML)`
  margin-top: 8rem;
  max-width: 100%;
`
