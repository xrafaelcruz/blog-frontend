import { gql } from 'graphql-request'

const query = gql`
  query getPosts($start: Int, $limit: Int) {
    posts(start: $start, limit: $limit) {
      id
      title
      content
      createdAt: created_at
    }
  }
`

export default query
