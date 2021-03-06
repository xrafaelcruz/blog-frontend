import { GetStaticProps } from 'next'
import Head from 'next/head'

import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'
import { PostProps } from 'types/api'

import BlinkText from 'components/BlinkText'
import Posts from 'components/Posts'
import ButtonNewPost from 'components/ButtonNewPost'

export type Props = {
  posts: PostProps[]
}

const Home = ({ posts }: Props) => (
  <>
    <Head>
      <title>Blog | Rafael Cruz | Front-end Developer</title>
    </Head>

    <BlinkText>Bem vindo ao meu blog front-end!</BlinkText>

    <ButtonNewPost />

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
