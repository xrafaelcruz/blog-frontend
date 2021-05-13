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
  overflow: auto;

  @media (max-width: 720px) {
    padding: 2rem;
  }
`
