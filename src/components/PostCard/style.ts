import styled from 'styled-components'

type ArticleProps = {
  ref: any
}

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

export const Title = styled.h2`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.color.lightGray};
  display: -webkit-box;
  font-size: 2rem;
  overflow: hidden;
  margin: 0;
  padding: 0.3rem;
  text-align: center;
  text-overflow: ellipsis;
  text-shadow: 0px 0px 0.6rem rgba(0, 0, 0, 0.3);

  @media (max-width: 920px) {
    font-size: 1.8rem;
  }
`

export const Time = styled.time`
  color: ${(props) => props.theme.color.lightGray};
`

export const Article = styled.article<ArticleProps>`
  background: ${(props) => props.theme.color.secondary};
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  overflow: auto;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: all 180ms ease-out;

  &:hover {
    border: 2px solid ${(props) => props.theme.color.primary};

    ${Title} {
      color: ${(props) => props.theme.color.primary};
    }

    ${Time} {
      color: ${(props) => props.theme.color.primary};
    }
  }

  @media (max-width: 1070px) {
    box-shadow: none;
    padding: 16px;
    gap: 10px;
  }
`
