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
  && {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 2rem;
    overflow: hidden;
    margin: 0;
    padding: 0.3rem;
    text-align: center;
    text-overflow: ellipsis;
    text-shadow: 0px 0px 0.6rem rgba(0, 0, 0, 0.3);
    transition: all 0.3 ease;

    @media (max-width: 720px) {
      font-size: 2.6rem;
    }
  }
`

export const Time = styled.time`
  color: ${(props) => props.theme.color.white};
  transition: all 0.3 ease;
`

export const Article = styled.article<ArticleProps>`
  background: ${(props) => props.theme.color.secondary};
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid ${(props) => props.theme.color.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  justify-content: space-between;
  padding: 3rem;
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

  @media (max-width: 720px) {
    padding: 2rem;
  }
`
