import React from 'react'
import {Avatar} from 'ui'
import {me} from 'models/user'
import {deleteCurrentSession} from 'models/session'
import {NavigationButton} from '../../../molecules'
import {useModal, useMyMutation, useMyQuery} from '../../../hooks'
import {StyledList} from './styles'

export const Authorized = () => {
  const {data} = useMyQuery(me())
  const [logout] = useMyMutation(deleteCurrentSession())

  const {toggle, isOpened} = useModal('notifications')

  return (
    <StyledList>
      <NavigationButton to={'/@' + data?.me?.nickname}>
        <Avatar src={data?.me?.avatar} />
      </NavigationButton>
      <NavigationButton to="/feed" icon="feed" />
      <NavigationButton
        icon="notifications"
        onClick={toggle}
        isActive={isOpened}
      />
      <NavigationButton icon="settings" to="/settings" />
      <NavigationButton icon="search" to="/search" />
      <NavigationButton icon="logout" onClick={() => logout()} />
    </StyledList>
  )
}
