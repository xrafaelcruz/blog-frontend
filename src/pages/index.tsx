import { GetStaticProps } from 'next'
import Head from 'next/head'

import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'
import { HomeProps } from 'types/api'

const createMarkup = (html: string) => ({ __html: html })

const Home = ({ posts }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {posts?.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={createMarkup(post.content)} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { posts } = await client.request(GET_POSTS)

  return {
    props: {
      posts
    }
  }
}

export default Home
