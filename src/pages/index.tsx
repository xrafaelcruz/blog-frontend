import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'
import { PostProps } from 'types/api'

import BlinkText from 'components/BlinkText'
import Posts from 'components/Posts'

export type Props = {
  posts: PostProps[]
}

const Home = ({ posts }: Props) => (
  <>
    <BlinkText>Bem vindo ao meu blog front-end!</BlinkText>
    <Posts posts={posts} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_POSTS)

  return {
    revalidate: 10,
    props: {
      posts
    }
  }
}

export default Home
