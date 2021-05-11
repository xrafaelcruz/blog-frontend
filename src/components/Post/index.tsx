import Link from 'next/link'

import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

import * as S from './style'

export type PropTypes = Omit<PostProps, 'content'>

const Post = ({ id, title, createdAt }: PropTypes) => (
  <Link href={`/post/${id}`}>
    <a>
      <S.Article>
        <S.Title>{title}</S.Title>
        <S.Time>{formatDate(createdAt)}</S.Time>
      </S.Article>
    </a>
  </Link>
)

export default Post
