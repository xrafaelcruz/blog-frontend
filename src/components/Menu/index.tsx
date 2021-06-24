import NextLink from 'next/link'

import useToggle from 'utils/hooks/toggle'

import Button from './Button'

import * as S from './style'

export const items = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Sobre',
    href: '/sobre'
  }
]

const Menu = () => {
  const [active, toggle] = useToggle()

  return (
    <S.Wrapper>
      <Button onClick={toggle} active={active} />

      <S.Nav active={`${active}`}>
        {items.map((item, i) => (
          <NextLink href={item.href} key={i}>
            <S.Link onClick={toggle} data-testid={item.label}>
              {item.label}
            </S.Link>
          </NextLink>
        ))}
      </S.Nav>
    </S.Wrapper>
  )
}

export default Menu
