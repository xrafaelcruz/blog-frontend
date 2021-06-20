import styled from 'styled-components'
import HTML from 'components/HTML'

export const Title = styled.h1``

export const Photo = styled.img`
  border-radius: 50%;
  height: 200px;
  margin: 20px auto;
  object-fit: cover;
  width: 200px;
`

export const Description = styled.h2`
  && {
    color: ${(props) => props.theme.color.white};
    font-size: 2.2rem;
    font-weight: 400;
    text-align: center;
  }
`

export const Content = styled(HTML)`
  margin-top: 8rem;
  max-width: 100%;
`
