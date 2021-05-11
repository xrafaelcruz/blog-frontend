import styled from 'styled-components'

export const Article = styled.article`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 3rem;
  position: relative;
  transition: background 250ms;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`

export const Title = styled.h2`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.color.primary};
  display: -webkit-box;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 4rem;
  margin-bottom: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  width: 100%;
`

export const Time = styled.time`
  color: ${(props) => props.theme.color.gray};
  font-family: ${(props) => props.theme.font.primary};
  font-size: 1.6rem;
  font-weight: 300;
`
