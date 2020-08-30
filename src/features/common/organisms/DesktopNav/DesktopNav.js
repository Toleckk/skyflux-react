import React, {useRef} from 'react'
import {useClickAway} from 'react-use'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar, H2} from '../../../../ui'
import {EventList, NavigationButton} from '../../molecules'
import {useNotificationsDisplay} from '../../hooks'
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

export const DesktopNav = () => {
  const {close, toggle, isOpened} = useNotificationsDisplay()

  const ref = useRef()
  useClickAway(ref, close)

  return (
    <Flex as="nav" ref={ref}>
      <ul>
        <StyledItem>
          <NavigationButton>
            <Avatar src="https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg" />
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
              <H2>Запросы на подписку</H2>
            </Box>
            <EventList events={events} />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
