import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

import * as S from './style'
import { PageWrapper } from 'components/Layout/style'

const PostDetail = ({ title, createdAt, content }: PostProps) => (
  <PageWrapper>
    <S.Title>{title}</S.Title>
    <S.Time>{formatDate(createdAt)}</S.Time>
    <S.Content html={content} />
  </PageWrapper>
)

export default PostDetail
