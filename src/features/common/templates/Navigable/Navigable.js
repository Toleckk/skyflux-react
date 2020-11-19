import React from 'react'
import PropTypes from 'prop-types'
import {useMedia} from 'react-use'
import {BottomBar, SideBar} from 'ui'
import {useMe, useModal} from 'features/shared/hooks'
import {DesktopNav, MobileNav, NotificationPopup} from '../../organisms'
import {SwitchThemeButton} from '../../molecules'
import {
  StyledChildrenWrapper,
  StyledContainer,
  StyledThemeButtonContainer,
} from './styles'

export const Navigable = ({children}) => {
  const {me, loading} = useMe()
  const isDesktop = useMedia('(min-width: 768px)')
  const {isOpened} = useModal('notifications')

  return (
    <StyledContainer>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
      {isDesktop ? (
        <SideBar
          minHeight={!isOpened && (loading || me) && '6rem'}
          border={isOpened || (!loading && !me) || 'hover'}
        >
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
      <NotificationPopup />
    </StyledContainer>
  )
}

Navigable.propTypes = {
  children: PropTypes.node,
}
