import { gql } from 'graphql-request'

const query = gql`
  {
    posts {
      title
      content
      createdAt: created_at
    }
  }
`

export default query
