import { AuthorProps } from 'types/api'

import PageWrapper from 'components/PageWrapper'
import TextContent from 'components/TextContent'

import * as S from './style'

const Author = ({ name, photo, content, description }: AuthorProps) => (
  <PageWrapper>
    <S.Photo src={photo[0].url} alt={name} />
    <S.Title>{name}</S.Title>
    <S.Description>{description}</S.Description>
    <TextContent html={content} />
  </PageWrapper>
)

export default Author
