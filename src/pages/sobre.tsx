import { GetStaticProps } from 'next'
import Head from 'next/head'

import client from 'graphql/client'
import GET_AUTHOR from 'graphql/queries/getAuthor'
import { AuthorProps } from 'types/api'

import Author from 'components/Author'

export type Props = {
  author: AuthorProps
}

const About = ({ author }: Props) => (
  <>
    <Head>
      <title>Sobre | Rafael Cruz | Front-end Developer</title>
    </Head>

    {author && <Author {...author} />}
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { author } = await client.request(GET_AUTHOR)

  return {
    revalidate: 60,
    props: {
      author
    }
  }
}

export default About
