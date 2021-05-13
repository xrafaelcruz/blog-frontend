import { gql } from 'graphql-request'

const query = gql`
  query getAuthor {
    author {
      name
      photo {
        url
      }
      description
      content
    }
  }
`

export default query
