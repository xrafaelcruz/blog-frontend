import styled from 'styled-components'
import HTML from 'components/HTML'

export const Article = styled.article`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 3rem;
  position: relative;
  overflow: auto;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.font.primary};
  font-size: 4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  width: 100%;
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

  p {
    color: ${(props) => props.theme.color.gray};
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.primary};
    font-weight: 300;
  }
`
