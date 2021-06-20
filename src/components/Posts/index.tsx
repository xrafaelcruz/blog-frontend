import { PostProps } from 'types/api'

import PostCard from 'components/PostCard'

import * as S from './style'
import { useHandleScroll } from './hooks'

export type Props = {
  posts: PostProps[]
}

const Posts = ({ posts }: Props) => {
  const { allPosts, handleScrollParams, handleScroll } = useHandleScroll(posts)

  return (
    <S.List
      dataLength={allPosts.length}
      next={() => handleScroll(handleScrollParams)}
      hasMore={handleScrollParams.hasMore}
      loader={<S.Message>Loading...</S.Message>}
    >
      {allPosts?.map((post) => (
        <S.Item key={post.id}>
          <PostCard {...post} />
        </S.Item>
      ))}
    </S.List>
  )
}

export default Posts
