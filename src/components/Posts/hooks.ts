import { useState, Dispatch, SetStateAction } from 'react'
import { PostProps } from 'types/api'

import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'

type RequestVariables = {
  start: number
  limit: number
}

type HandleScrollParams = {
  hasMore: boolean
  variables: RequestVariables
  setHasMore: Dispatch<SetStateAction<boolean>>
  setAllPosts: Dispatch<SetStateAction<PostProps[]>>
  setVariables: Dispatch<SetStateAction<RequestVariables>>
}

const fetchMorePosts = async (variables: RequestVariables) => {
  const { posts } = await client.request(GET_POSTS, { ...variables })

  return posts
}

const handleScroll = async (params: HandleScrollParams) => {
  if (!params.hasMore) {
    return null
  }

  const newPosts = await fetchMorePosts(params.variables)

  if (!newPosts.length) {
    params.setHasMore(false)
    return null
  }

  params.setAllPosts((old) => [...old, ...newPosts])
  params.setVariables((old) => ({ ...old, start: (old.start += old.limit) }))
}

export const useHandleScroll = (posts: PostProps[]) => {
  const [allPosts, setAllPosts] = useState(posts)
  const [variables, setVariables] = useState({ start: 20, limit: 20 })
  const [hasMore, setHasMore] = useState(true)

  const handleScrollParams = {
    hasMore,
    variables,
    setHasMore,
    setAllPosts,
    setVariables
  }

  return {
    allPosts,
    handleScrollParams,
    handleScroll
  }
}
