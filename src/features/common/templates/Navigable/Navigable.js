import React from 'react'
import PropTypes from 'prop-types'
import {useMedia} from 'react-use'
import {BottomBar, SideBar} from 'ui'
import {DesktopNav, MobileNav} from '../../organisms'
import {SwitchThemeButton} from '../../molecules'
import {useModal} from '../../hooks'
import {
  StyledChildrenWrapper,
  StyledContainer,
  StyledThemeButtonContainer,
} from './styles'

export const Navigable = ({children}) => {
  const isDesktop = useMedia('(min-width: 768px)')
  const {isOpened} = useModal('notifications')

  return (
    <StyledContainer>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
      {isDesktop ? (
        <SideBar minHeight={isOpened || '6rem'} border={isOpened || 'hover'}>
          <DesktopNav />
        </SideBar>
      ) : (
        <BottomBar>
          <MobileNav />
        </BottomBar>
      )}
      {isDesktop && (
        <StyledThemeButtonContainer>
          <SwitchThemeButton />
        </StyledThemeButtonContainer>
      )}
    </StyledContainer>
  )
}

Navigable.propTypes = {
  children: PropTypes.node,
}
