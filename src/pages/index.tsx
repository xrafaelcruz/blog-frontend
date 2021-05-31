import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'
import { PostProps } from 'types/api'

import Posts from 'components/Posts'

export type PropTypes = {
  posts: PostProps[]
}

const Home = ({ posts }: PropTypes) => (
  <>
    <Posts posts={posts} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_POSTS, { limit: 20 })

  return {
    revalidate: 10,
    props: {
      posts
    }
  }
}

export default Home
