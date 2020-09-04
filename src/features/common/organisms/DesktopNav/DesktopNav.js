import React, {useRef} from 'react'
import {useClickAway} from 'react-use'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Avatar, H2} from 'ui'
import {me} from 'models/user'
import {removeCurrentSession} from 'models/session'
import {NavigationButton} from '../../molecules'
import {useModal, useMyMutation, useMyQuery} from '../../hooks'
import {EventsDisplay} from '../EventsDisplay'
import {StyledItem} from './styles'

export const DesktopNav = withTranslation('nav')(({t}) => {
  const {data, loading} = useMyQuery(me())
  const [logout] = useMyMutation(removeCurrentSession())

  const {close, toggle, isOpened} = useModal('notifications')

  const ref = useRef()
  useClickAway(ref, close)

  if (loading || !data) return <></>

  return (
    <Flex as="nav" ref={ref}>
      <ul>
        <StyledItem>
          <NavigationButton>
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
          <NavigationButton icon="logout" onClick={logout} />
        </StyledItem>
      </ul>
      {isOpened && (
        <Flex flexDirection="column" paddingRight="1rem">
          <Flex
            flexBasis="0px"
            flexGrow="1"
            overflow="hidden"
            flexDirection="column"
          >
            <Box margin="0 2rem">
              <H2>{t('Subscriptions requests')}</H2>
            </Box>
            <EventsDisplay />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
})
