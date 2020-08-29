import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useLocation, useMedia} from 'react-use'
import {DesktopNav, MobileNav} from '../../organisms'
import {BottomBar, SideBar} from '../../../../ui'

export const Navigable = ({children}) => {
  const isDesktop = useMedia('(min-width: 768px)')
  const {pathname} = useLocation()
  const isNotificationsOpened = !!pathname.match('notifications')

  return (
    <Flex justifyContent="center">
      <Flex width="55vw" minHeight="100vh" flexDirection="column">
        {children}
      </Flex>
      {isDesktop ? (
        <SideBar
          minHeight={isNotificationsOpened || '6rem'}
          border={isNotificationsOpened || 'hover'}
        >
          <DesktopNav />
        </SideBar>
      ) : (
        <BottomBar>
          <MobileNav />
        </BottomBar>
      )}
    </Flex>
  )
}

Navigable.propTypes = {
  children: PropTypes.node,
}
