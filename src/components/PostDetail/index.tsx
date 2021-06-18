import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

import * as S from './style'

const PostDetail = ({ title, createdAt, content }: PostProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Time>{formatDate(createdAt)}</S.Time>
    <S.Content html={content} />
  </S.Wrapper>
)

export default PostDetail
