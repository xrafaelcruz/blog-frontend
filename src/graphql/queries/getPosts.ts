import { gql } from 'graphql-request'

export const limit = 15

const query = gql`
  query getPosts($start: Int, $limit: Int = ${limit}, $sort: String = "created_at:DESC") {
    posts(start: $start, limit: $limit, sort: $sort) {
      id
      title
      content
      createdAt: created_at
    }
  }
`

export default query
