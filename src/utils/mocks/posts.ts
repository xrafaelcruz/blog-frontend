import { useEffect } from 'react'
import faker from 'faker'
import client from 'graphql/client'
import CREATE_POST from 'graphql/queries/createPost'

export const generatePosts = async (numberOfPosts = 1) => {
  for (let i = 0; i < numberOfPosts; i++) {
    await client.request(CREATE_POST, {
      input: {
        data: {
          title: faker.lorem.sentence(),
          content: `<p>${faker.lorem.paragraphs()}</p>`
        }
      }
    })
  }
}

export const useGeneratePosts = (numberOfPosts = 1) => {
  useEffect(() => {
    generatePosts(numberOfPosts)
  }, [numberOfPosts])
}

export default generatePosts
