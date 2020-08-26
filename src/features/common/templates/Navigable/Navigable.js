import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useMedia} from 'react-use'
import {DesktopNav, MobileNav} from '../../organisms'
import {BottomBar, SideBar} from '../../../../ui'

export const Navigable = ({children}) => {
  const isDesktop = useMedia('(min-width: 768px)')

  return (
    <Flex justifyContent="center" minHeight="100vh">
      {children}
      {isDesktop ? (
        <SideBar minHeight="6rem">
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
