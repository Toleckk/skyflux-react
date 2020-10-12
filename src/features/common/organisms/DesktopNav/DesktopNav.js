import React, {useRef} from 'react'
import {useClickAway} from 'react-use'
import {Flex} from 'reflexbox/styled-components'
import {Avatar} from 'ui'
import {me} from 'models/user'
import {deleteCurrentSession} from 'models/session'
import {NavigationButton} from '../../molecules'
import {useModal, useMyMutation, useMyQuery} from '../../hooks'
import {NotificationTabs} from '../NotificationTabs'
import {StyledItem} from './styles'

export const DesktopNav = () => {
  const {data, loading} = useMyQuery(me())
  const [logout] = useMyMutation(deleteCurrentSession())

  const {close, toggle, isOpened} = useModal('notifications')

  const ref = useRef()
  useClickAway(ref, close)

  if (loading || !data) return <></>

  return (
    <Flex as="nav" ref={ref}>
      <ul>
        <StyledItem>
          <NavigationButton to={'/@' + data?.me?.nickname}>
            <Avatar src={data?.me?.avatar} />
          </NavigationButton>
        </StyledItem>
        <StyledItem>
          <NavigationButton to="/feed" icon="feed" />
        </StyledItem>
        <StyledItem>
          <NavigationButton
            icon="notifications"
            onClick={toggle}
            isActive={isOpened}
          />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="settings" to="/settings" />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="search" to="/search" />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="logout" onClick={() => logout()} />
        </StyledItem>
      </ul>
      {isOpened && (
        <Flex flexDirection="column">
          <Flex flexBasis={0} flexGrow={1} overflowY="hidden">
            <NotificationTabs />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
