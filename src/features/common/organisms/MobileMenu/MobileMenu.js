import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Avatar, H2, Icon} from 'ui'
import {me} from 'models/user'
import {useModal, useMyQuery} from '../../hooks'
import {StyledBigNickname} from './styles'

export const MobileMenu = () => {
  const {data, loading} = useMyQuery(me())
  const user = data?.me

  const {t} = useTranslation('nav')
  const {open} = useModal('notifications')

  if (loading && !data) return <></>

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
              <H2>{t('News')}</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Flex as="button" onClick={open} marginTop="2rem" alignItems="center">
            <Box width="2rem" height="2rem" marginRight="2rem">
              <Icon icon="notifications" />
            </Box>
            <H2>{t('Notifications')}</H2>
          </Flex>
        </li>
        <li>
          <Link to="/settings">
            <Flex marginTop="2rem" alignItems="center">
              <Box width="2rem" height="2rem" marginRight="2rem">
                <Icon icon="settings" />
              </Box>
              <H2>{t('Settings')}</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Flex marginTop="2rem" alignItems="center">
              <Box width="2rem" height="2rem" marginRight="2rem">
                <Icon icon="search" />
              </Box>
              <H2>{t('Search')}</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Flex marginTop="2rem" alignItems="center">
            <Box width="2rem" height="2rem" marginRight="2rem">
              <Icon icon="logout" />
            </Box>
            <H2>{t('Log out')}</H2>
          </Flex>
        </li>
      </ul>
    </Flex>
  )
}
