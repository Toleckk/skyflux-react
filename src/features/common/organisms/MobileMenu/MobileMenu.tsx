import React, {Suspense} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {Translation} from 'react-i18next'
import {H2} from 'typography'
import {Avatar, Icon, Loader} from 'ui'
import {useMe, useModal} from 'features/shared/hooks'
import {SwitchThemeButton} from '../../molecules'
import {useLogout} from '../../hooks'
import {
  StyledBigNickname,
  StyledRelativeContainer,
  StyledThemeButtonContainer,
} from './styles'

export type MobileMenuProps = {
  onItemClick?: () => unknown
}

export const MobileMenu: React.FC<MobileMenuProps> = ({onItemClick}) => {
  const {open} = useModal('notifications')

  const {me} = useMe()

  const {logout} = useLogout()

  if (!me) return <></>

  return (
    <StyledRelativeContainer>
      <Suspense fallback={<Loader />}>
        <Flex
          flexDirection="column"
          alignItems="center"
          as={Link}
          onClick={onItemClick}
          {...{to: '/@' + me.nickname}}
        >
          <Box width="6rem" height="6rem">
            <Avatar src={me.avatar} />
          </Box>
          <Box marginTop="1rem">
            <StyledBigNickname>@{me.nickname}</StyledBigNickname>
          </Box>
        </Flex>
        <Translation ns="nav">
          {t => (
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
                <Flex
                  as="button"
                  onClick={() => open()}
                  marginTop="2rem"
                  alignItems="center"
                >
                  <Box width="2rem" height="2rem" marginRight="2rem">
                    <Icon icon="notifications" />
                  </Box>
                  <H2>{t('Events')}</H2>
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
                  onClick={logout}
                >
                  <Box width="2rem" height="2rem" marginRight="2rem">
                    <Icon icon="logout" />
                  </Box>
                  <H2>{t('Log out')}</H2>
                </Flex>
              </li>
            </ul>
          )}
        </Translation>
        <StyledThemeButtonContainer>
          <SwitchThemeButton />
        </StyledThemeButtonContainer>
      </Suspense>
    </StyledRelativeContainer>
  )
}
