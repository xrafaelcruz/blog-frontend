import { generatePosts } from 'utils/mocks/posts'
import * as S from './style'

const ButtonNewPost = () => (
  <S.Wrapper>
    <S.Button onClick={() => generatePosts()}>Gerar novo post</S.Button>
  </S.Wrapper>
)

export default ButtonNewPost
