import styled from 'styled-components'
import Infinite from 'react-infinite-scroll-component'

// eslint-disable-next-line
export const InfiniteScroll = styled(Infinite as any)`
  position: relative;
  min-height: 100vh;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  list-style: none;
  padding-bottom: 80px;
  position: relative;
  margin: auto;
  max-width: 2300px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    padding-top: 10px;
  }
`

export const Item = styled.div`
  height: 25rem;
  padding: 20px;

  &:last-child {
    margin-bottom: 25rem;
  }

  @media (max-width: 920px) {
    height: 17rem;
    padding: 10px 20px;
  }
`

export const Message = styled.p`
  bottom: 0;
  color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.font.primary};
  font-size: 2rem;
  position: absolute;
  text-align: center;
  width: 100%;
`
