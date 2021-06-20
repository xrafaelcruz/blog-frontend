import useToggle from 'utils/hooks/toggle'

import Button from './Button'
import Items from './Items'

import * as S from './style'

const Menu = () => {
  const [active, toggle] = useToggle()

  return (
    <S.Wrapper>
      <Button onClick={toggle} active={`${active}`} />
      <Items onClick={toggle} active={`${active}`} />
    </S.Wrapper>
  )
}

export default Menu
