import { GraphQLClient } from 'graphql-request'

const GRAPHQL_HOST = process.env.NEXT_PUBLIC_GRAPHQL_HOST || ''
const client = new GraphQLClient(GRAPHQL_HOST)

export default client
