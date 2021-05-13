import styled from 'styled-components'
import Card from 'components/Card'

export const Article = styled(Card)`
  transition: background 250ms;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`

export const Title = styled.h2`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-size: 4rem;
  margin-bottom: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;

  @media (max-width: 720px) {
    font-size: 3.8rem;
  }
`

export const Time = styled.time``
