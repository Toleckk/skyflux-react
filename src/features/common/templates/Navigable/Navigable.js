import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useMedia} from 'react-use'
import {BottomBar, SideBar} from 'ui'
import {DesktopNav, MobileNav} from '../../organisms'
import {useModal} from '../../hooks'

export const Navigable = ({children}) => {
  const isDesktop = useMedia('(min-width: 768px)')
  const {isOpened} = useModal('notifications')

  return (
    <Flex justifyContent="center">
      <Flex width="55vw" minHeight="100vh" flexDirection="column">
        {children}
      </Flex>
      {isDesktop ? (
        <SideBar minHeight={isOpened || '6rem'} border={isOpened || 'hover'}>
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
