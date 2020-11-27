import React from 'react'
import {useMedia} from 'react-use'
import {BottomBar, SideBar} from '@skyflux/react/ui'
import {useMe, useModal} from '@skyflux/react/features/shared/hooks'
import {
  StyledChildrenWrapper,
  StyledContainer,
  StyledThemeButtonContainer,
} from './styles'
import {
  DesktopNav,
  MobileNav,
  NotificationPopup,
  SwitchThemeButton,
} from '../../components'

export const Navigable: React.FC = ({children}) => {
  const {me} = useMe()
  const isDesktop = useMedia('(min-width: 768px)')
  const {isOpened} = useModal('notifications')

  return (
    <StyledContainer>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
      {isDesktop ? (
        <SideBar
          minHeight={!isOpened && !!me && '6rem'}
          border={isOpened || !me || 'hover'}
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
