import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_AUTHOR from 'graphql/queries/getAuthor'
import { AuthorProps } from 'types/api'

import Author from 'components/Author'

export type PropTypes = {
  author: AuthorProps
}

const About = ({ author }: PropTypes) => (
  <>
    <Author {...author} />
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
