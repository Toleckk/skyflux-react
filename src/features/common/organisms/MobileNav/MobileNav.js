import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import useBooleanState from 'use-boolean-state'
import {Avatar, Modal} from 'ui'
import {me} from 'models/user'
import {useModal, useMyQuery} from '../../hooks'
import {NavigationButton} from '../../molecules'
import {MobileMenu, NotificationTabs} from '..'
import {StyledItem} from './styles'

export const MOBILE_NAV_HEIGHT = '3rem'

export const MobileNav = () => {
  const {data, loading} = useMyQuery(me())
  const {close, toggle, isOpened} = useModal('notifications')
  const [menuOpened, openMenu, closeMenu] = useBooleanState(false)

  if (loading || !data) return <></>

  return (
    <nav>
      <Flex
        as="ul"
        justifyContent="space-evenly"
        alignItems="center"
        height={MOBILE_NAV_HEIGHT}
        width="100%"
      >
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
      <Modal visible={isOpened} onClose={close} placement="right">
        <NotificationTabs />
      </Modal>
      <Modal visible={menuOpened} onClose={closeMenu} placement="right">
        <MobileMenu onItemClick={closeMenu} />
      </Modal>
    </nav>
  )
}
