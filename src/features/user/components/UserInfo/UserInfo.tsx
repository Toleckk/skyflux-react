import React from 'react'
import {useTranslation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {Text} from '@skyflux/react/typography'
import {Date, Icon} from '@skyflux/react/ui'
import {useMe} from '@skyflux/react/features/shared/hooks'
import {
  StyledAvatarContainer,
  StyledRelativeContainer,
  StyledSubscribeButton,
} from './styles'
import {User_user} from '../../graphql'
import {About, BigNickname, Stat, UserAvatar} from '..'

export type UserInfoProps = {
  user: User_user
}

export const UserInfo: React.FC<UserInfoProps> = ({user}) => {
  const {t} = useTranslation('user')
  const {me, isMe} = useMe()

  return (
    <StyledRelativeContainer>
      <Flex>
        <StyledAvatarContainer>
          <UserAvatar user={user} />
        </StyledAvatarContainer>
        <Flex flex={1} justifyContent="space-evenly" alignItems="center">
          <Stat count={user.postsCount} name={t('Posts')} icon="post" />
          <Stat count={user.subsCount} name={t('Reads')} icon="user" />
          <Stat count={user.subscribersCount} name={t('Read by')} icon="user" />
        </Flex>
      </Flex>
      <Box marginTop="1rem" marginBottom="0.5rem">
        <BigNickname>{user.nickname}</BigNickname>
      </Box>
      {user.description.about && (
        <Box marginBottom="0.5em">
          <About>{user.description.about}</About>
        </Box>
      )}
      <Flex as={Text} alignItems="center">
        {user.description.birthday && (
          <>
            <Icon icon="birthday" width="1em" height="1em" />
            &nbsp;
            <Date date={user.description.birthday} time={false} />
            &nbsp;&nbsp;
          </>
        )}
        {user.description.from && (
          <>
            <Icon icon="location" width="1em" height="1em" />
            &nbsp;
            {user.description.from}
          </>
        )}
      </Flex>
      {me && !isMe(user) && <StyledSubscribeButton user={user} />}
    </StyledRelativeContainer>
  )
}
