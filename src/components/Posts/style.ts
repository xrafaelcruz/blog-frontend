import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

// eslint-disable-next-line
export const List = styled(InfiniteScroll as any)`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  list-style: none;
  padding-bottom: 80px;
  position: relative;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  height: 250px;
`

export const Message = styled.p`
  bottom: 0;
  color: ${(props) => props.theme.color.gray};
  font-family: ${(props) => props.theme.font.primary};
  font-size: 2rem;
  position: absolute;
  text-align: center;
  width: 100%;
`
