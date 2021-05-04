export type PostProps = {
  title: string
  content: string
  createdAt: string
}

export type HomeProps = {
  posts: PostProps[]
}
