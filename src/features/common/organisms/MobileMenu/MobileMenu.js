import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Avatar, H2, Icon} from 'ui'
import {me} from 'models/user'
import {deleteCurrentSession} from 'models/session'
import {useModal, useMyMutation, useMyQuery} from '../../hooks'
import {SwitchThemeButton} from '../../molecules'
import {
  StyledBigNickname,
  StyledRelativeContainer,
  StyledThemeButtonContainer,
} from './styles'

export const MobileMenu = ({onItemClick}) => {
  const {t} = useTranslation('nav')

  const {open} = useModal('notifications')

  const {data, loading} = useMyQuery(me())
  const user = data?.me

  const [logout] = useMyMutation(deleteCurrentSession())

  if (loading && !data) return <></>

  return (
    <StyledRelativeContainer>
      <Link to={'/@' + user.nickname} onClick={onItemClick}>
        <Box width="6rem" height="6rem">
          <Avatar src={user.avatar} />
        </Box>
        <Box marginTop="1rem">
          <StyledBigNickname>@{user.nickname}</StyledBigNickname>
        </Box>
      </Link>
      <ul>
        <li>
          <Link to="/feed" onClick={onItemClick}>
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
          <Link to="/settings" onClick={onItemClick}>
            <Flex marginTop="2rem" alignItems="center">
              <Box width="2rem" height="2rem" marginRight="2rem">
                <Icon icon="settings" />
              </Box>
              <H2>{t('Settings')}</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Link to="/search" onClick={onItemClick}>
            <Flex marginTop="2rem" alignItems="center">
              <Box width="2rem" height="2rem" marginRight="2rem">
                <Icon icon="search" />
              </Box>
              <H2>{t('Search')}</H2>
            </Flex>
          </Link>
        </li>
        <li>
          <Flex
            marginTop="2rem"
            alignItems="center"
            as="button"
            onClick={() => logout()}
          >
            <Box width="2rem" height="2rem" marginRight="2rem">
              <Icon icon="logout" />
            </Box>
            <H2>{t('Log out')}</H2>
          </Flex>
        </li>
      </ul>
      <StyledThemeButtonContainer>
        <SwitchThemeButton />
      </StyledThemeButtonContainer>
    </StyledRelativeContainer>
  )
}

MobileMenu.propTypes = {
  onItemClick: PropTypes.func,
}
