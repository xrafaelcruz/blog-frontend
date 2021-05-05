import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  list-style: none;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.li`
  height: 250px;
`
