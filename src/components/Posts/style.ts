import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

// eslint-disable-next-line
export const List = styled(InfiniteScroll as any)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  list-style: none;
  padding-bottom: 80px;
  position: relative;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    padding-top: 10px;
  }
`

export const Item = styled.div`
  height: 25rem;
  padding: 20px;

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
