import { useState, Dispatch, SetStateAction } from 'react'
import { PostProps } from 'types/api'

import client from 'graphql/client'
import GET_POSTS, { limit } from 'graphql/queries/getPosts'

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

  if (newPosts.length < limit) {
    params.setHasMore(false)
  }

  if (!newPosts.length) {
    return null
  }

  params.setAllPosts((old) => [...old, ...newPosts])
  params.setVariables((old) => ({ ...old, start: (old.start += old.limit) }))
}

export const useHandleScroll = (posts: PostProps[]) => {
  const [allPosts, setAllPosts] = useState(posts)
  const [variables, setVariables] = useState({ start: limit, limit })
  const [hasMore, setHasMore] = useState(posts.length < limit ? false : true)

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
