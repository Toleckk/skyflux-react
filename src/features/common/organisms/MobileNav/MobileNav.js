import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {Drawer} from 'react-pretty-drawer'
import useBooleanState from 'use-boolean-state'
import {Avatar} from 'ui'
import {me} from 'models/user'
import {useModal, useMyQuery} from '../../hooks'
import {NavigationButton} from '../../molecules'
import {MobileMenu, SubRequestsDisplay} from '..'
import {StyledItem} from './styles'

export const MobileNav = () => {
  const {data, loading} = useMyQuery(me())
  const {close, toggle, isOpened} = useModal('notifications')
  const [menuOpened, openMenu, closeMenu] = useBooleanState(false)

  if (loading || !data) return <></>

  return (
    <nav>
      <Flex as="ul" justifyContent="space-evenly">
        <StyledItem>
          <NavigationButton icon="search" to="/search" />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="notifications" onClick={toggle} />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="feed" to="/feed" />
        </StyledItem>
        <StyledItem>
          <NavigationButton onClick={openMenu}>
            <Avatar src={data?.me?.avatar} />
          </NavigationButton>
        </StyledItem>
      </Flex>
      <Drawer visible={isOpened} onClose={close} placement="right">
        <SubRequestsDisplay />
      </Drawer>
      <Drawer visible={menuOpened} onClose={closeMenu} placement="right">
        <MobileMenu onItemClick={closeMenu} />
      </Drawer>
    </nav>
  )
}
