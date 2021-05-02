import { gql } from 'graphql-request'

const query = gql`
  {
    posts {
      title
      content
    }
  }
`

export default query
