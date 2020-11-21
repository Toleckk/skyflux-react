import React from 'react'
import {Avatar} from 'ui'
import {useMe, useModal} from 'features/shared/hooks'
import {NavigationButton} from '../../../molecules'
import {useLogout} from '../../../hooks'
import {StyledList} from './styles'

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
