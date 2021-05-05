import { PostProps } from 'types/api'

import Post from 'components/Post'

import * as S from './style'

export type PropTypes = {
  posts: PostProps[]
}

const Posts = ({ posts }: PropTypes) => (
  <S.List>
    {posts?.map((post, i) => (
      <S.Item key={i}>
        <Post {...post} />
      </S.Item>
    ))}
  </S.List>
)

export default Posts
