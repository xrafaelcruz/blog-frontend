import { gql } from 'graphql-request'

const mutation = gql`
  mutation createPost($input: createPostInput) {
    createPost(input: $input) {
      post {
        id
        title
        content
        createdAt: created_at
      }
    }
  }
`

export default mutation
