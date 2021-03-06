import { GetStaticProps } from 'next'
import Head from 'next/head'

import client from 'graphql/client'
import GET_POST from 'graphql/queries/getPost'
import GET_POSTS, { limit } from 'graphql/queries/getPosts'
import { PostProps } from 'types/api'

import PostDetail from 'components/PostDetail'

export type Props = {
  post: PostProps
}

type PathProps = {
  params: { id: string }
}

const PostPage = ({ post }: Props) => (
  <>
    <Head>
      <title>{post?.title} | Rafael Cruz</title>
    </Head>

    {post && <PostDetail {...post} />}
  </>
)

export async function getStaticPaths() {
  const { posts } = await client.request(GET_POSTS, { limit })
  const paths: PathProps[] = []

  posts.forEach(({ id }: PostProps) => {
    paths.push({ params: { id } })
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request(GET_POST, { id: params?.id || 1 })

  return {
    revalidate: 60,
    props: {
      post
    }
  }
}

export default PostPage
