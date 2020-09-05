import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Drawer} from 'react-pretty-drawer'
import useBooleanState from 'use-boolean-state'
import {useTranslation} from 'react-i18next'
import {Avatar, H2} from 'ui'
import {me} from 'models/user'
import {NavigationButton} from '../../molecules'
import {useModal, useMyQuery} from '../../hooks'
import {MobileMenu} from '../MobileMenu'
import {EventsDisplay} from '../EventsDisplay'
import {StyledItem} from './styles'

export const MobileNav = () => {
  const {data, loading} = useMyQuery(me())
  const {t} = useTranslation('nav')
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
        <Flex flexDirection="column" overflow="hidden" height="100%">
          <H2>{t('Subscriptions requests')}</H2>
          <Box flexGrow={1} flexBasis={0} overflow="auto">
            <EventsDisplay />
          </Box>
        </Flex>
      </Drawer>
      <Drawer visible={menuOpened} onClose={closeMenu} placement="right">
        <MobileMenu onItemClick={closeMenu} />
      </Drawer>
    </nav>
  )
}
