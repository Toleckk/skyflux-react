import React, {useRef} from 'react'
import {useClickAway} from 'react-use'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Avatar, H2} from 'ui'
import {me} from 'models/user'
import {EventList, NavigationButton} from '../../molecules'
import {useModal, useMyQuery} from '../../hooks'
import {StyledItem} from './styles'

const events = [
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
  {
    user: {
      nickname: 'toleckk',
      avatar:
        'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
    },
  },
].map((event, _id) => ({...event, _id}))

export const DesktopNav = withTranslation('nav')(({t}) => {
  const {data, loading} = useMyQuery(me())

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
          <NavigationButton icon="logout" />
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
            <EventList events={events} />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
})
