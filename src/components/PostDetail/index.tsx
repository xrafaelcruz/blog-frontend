import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

import * as S from './style'

const PostDetail = ({ title, createdAt, content }: PostProps) => (
  <>
    <S.Title>{title}</S.Title>
    <S.Time>{formatDate(createdAt)}</S.Time>
    <S.Content html={content} />
  </>
)

export default PostDetail
