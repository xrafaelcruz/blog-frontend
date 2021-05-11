import { gql } from 'graphql-request'

const query = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      createdAt: created_at
    }
  }
`

export default query
