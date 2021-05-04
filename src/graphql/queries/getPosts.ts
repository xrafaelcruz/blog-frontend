import { gql } from 'graphql-request'

const query = gql`
  {
    posts {
      title
      content
      created_at: createdAt
    }
  }
`

export default query
