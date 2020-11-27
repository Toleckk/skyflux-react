import React from 'react'
import {Avatar} from '@skyflux/react/ui'
import {useMe, useModal} from '@skyflux/react/features/shared/hooks'
import {StyledList} from './styles'
import {NavigationButton} from '../../../components'
import {useLogout} from '../../../hooks'

export const Authorized: React.FC = () => {
  const {me} = useMe()
  const {logout} = useLogout()

  const {toggle, isOpened} = useModal('notifications')

  return (
    <StyledList>
      <NavigationButton to={'/@' + me?.nickname}>
        <Avatar src={me?.avatar} />
      </NavigationButton>
      <NavigationButton to="/feed" icon="feed" />
      <NavigationButton
        icon="notifications"
        onClick={toggle}
        isActive={isOpened}
      />
      <NavigationButton icon="settings" to="/settings" />
      <NavigationButton icon="search" to="/search" />
      <NavigationButton icon="logout" onClick={logout} />
    </StyledList>
  )
}
