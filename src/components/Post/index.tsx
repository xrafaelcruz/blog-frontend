import { PostProps } from 'types/api'

export type PropTypes = Omit<PostProps, 'content'>

const Post = ({ title, createdAt }: PropTypes) => (
  <article>
    <h2>{title}</h2>
    <time>{createdAt}</time>
  </article>
)

export default Post
