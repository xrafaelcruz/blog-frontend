export type PostProps = {
  id: string
  title: string
  content: string
  createdAt: string
}

export type AuthorProps = {
  name: string
  photo: [{ url: string }]
  description?: string
  content: string
}
