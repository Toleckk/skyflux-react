import React from 'react'
import {Avatar} from 'ui'
import {useMe} from 'features/shared/hooks'
import {NavigationButton} from '../../../molecules'
import {StyledList} from './styles'

export type AuthorizedProps = {
  onMenuClick?: () => unknown
  onNotificationsClick?: () => unknown
}

export const Authorized: React.FC<AuthorizedProps> = ({
  onMenuClick,
  onNotificationsClick,
}) => {
  const {me} = useMe()

  return (
    <StyledList>
      <NavigationButton icon="search" to="/search" />
      <NavigationButton icon="notifications" onClick={onNotificationsClick} />
      <NavigationButton icon="feed" to="/feed" />
      <NavigationButton onClick={onMenuClick}>
        <Avatar src={me?.avatar} />
      </NavigationButton>
    </StyledList>
  )
}
