import { gql } from 'graphql-request'

const query = gql`
  query getPosts($start: Int, $limit: Int = 20, $sort: String = "created_at") {
    posts(start: $start, limit: $limit, sort: $sort) {
      id
      title
      content
      createdAt: created_at
    }
  }
`

export default query
