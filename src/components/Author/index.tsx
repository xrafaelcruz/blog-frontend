import { AuthorProps } from 'types/api'

import * as S from './style'
import { PageWrapper } from 'components/Layout/style'

const Author = ({ name, photo, content, description }: AuthorProps) => (
  <PageWrapper>
    <S.Photo src={photo[0].url} alt={name} aria-hidden="true" />
    <S.Title>{name}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Content html={content} />
  </PageWrapper>
)

export default Author
