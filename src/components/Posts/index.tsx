import { PostProps } from 'types/api'

import Post from 'components/Post'

import * as S from './style'
import { useHandleScroll } from './hooks'

export type PropTypes = {
  posts: PostProps[]
}

const Posts = ({ posts }: PropTypes) => {
  const { allPosts, handleScrollParams, handleScroll } = useHandleScroll(posts)

  return (
    <S.List
      dataLength={allPosts.length}
      next={() => handleScroll(handleScrollParams)}
      hasMore={handleScrollParams.hasMore}
      loader={<S.Message>Loading...</S.Message>}
      endMessage={<S.Message>Fim</S.Message>}
    >
      {allPosts?.map((post) => (
        <S.Item key={post.id}>
          <Post {...post} />
        </S.Item>
      ))}
    </S.List>
  )
}

export default Posts
