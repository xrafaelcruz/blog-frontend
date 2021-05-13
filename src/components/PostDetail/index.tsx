import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

import Card from 'components/Card'

import * as S from './style'

const PostDetail = ({ title, createdAt, content }: PostProps) => (
  <Card>
    <S.Title>{title}</S.Title>
    <S.Time>{formatDate(createdAt)}</S.Time>
    <S.Content html={content} />
  </Card>
)

export default PostDetail
