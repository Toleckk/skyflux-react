import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {Avatar, H2, Icon} from '../../../../ui'
import {useNotificationsDisplay} from '../../hooks'
import {StyledBigNickname} from './styles'

const user = {
  avatar:
    'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  nickname: 'toleckk',
  postsCount: 61,
  subscriptionsCount: 2,
  subscribersCount: 3,
  description: {
    about: '123',
    from: 'Armenia',
    birthday: '03.08.1999',
  },
}

export const MobileMenu = () => {
  const {open} = useNotificationsDisplay()

  return (
    <Flex paddingTop="2rem" flexDirection="column" alignItems="center">
      <Box width="6rem" height="6rem">
        <Avatar src={user.avatar} />
      </Box>
      <Box marginTop="1rem">
        <StyledBigNickname>@{user.nickname}</StyledBigNickname>
      </Box>
      <ul>
        <li>
          <Link to="/feed">
            <Flex marginTop="2rem" alignItems="center">
              <Box width="2rem" height="2rem" marginRight="2rem">
                <Icon icon="feed" />
              </Box>
              <H2>Новости</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Flex as="button" onClick={open} marginTop="2rem" alignItems="center">
            <Box width="2rem" height="2rem" marginRight="2rem">
              <Icon icon="notifications" />
            </Box>
            <H2>Оповещения</H2>
          </Flex>
        </li>
        <li>
          <Link to="/settings">
            <Flex marginTop="2rem" alignItems="center">
              <Box width="2rem" height="2rem" marginRight="2rem">
                <Icon icon="settings" />
              </Box>
              <H2>Настройки</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Flex marginTop="2rem" alignItems="center">
              <Box width="2rem" height="2rem" marginRight="2rem">
                <Icon icon="search" />
              </Box>
              <H2>Поиск</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Flex marginTop="2rem" alignItems="center">
            <Box width="2rem" height="2rem" marginRight="2rem">
              <Icon icon="logout" />
            </Box>
            <H2>Выйти</H2>
          </Flex>
        </li>
      </ul>
    </Flex>
  )
}