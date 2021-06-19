import styled from 'styled-components'
import HTML from 'components/HTML'

export const Title = styled.h1`
  && {
    color: ${(props) => props.theme.color.primary};
    text-align: center;
  }
`

export const WrapperPhoto = styled.div`
  border-radius: 50%;
  margin: 20px auto;
  height: 200px;
  overflow: hidden;
  width: 200px;
`

export const Photo = styled.img`
  object-fit: cover;
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
