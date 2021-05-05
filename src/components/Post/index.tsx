import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

import * as S from './style'

export type PropTypes = Omit<PostProps, 'content'>

const Post = ({ title, createdAt }: PropTypes) => (
  <S.Article>
    <S.Title>{title}</S.Title>
    <S.Time>{formatDate(createdAt)}</S.Time>
  </S.Article>
)

export default Post
