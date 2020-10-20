import React from 'react'
import useBooleanState from 'use-boolean-state'
import Lightbox from 'react-image-lightbox'
import {useTranslation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar, Date, Icon, Text} from 'ui'
import {User} from 'models/user'
import {About, BigNickname, Stat} from '../../atoms'

export const UserInfo = ({user}) => {
  const {t} = useTranslation('user')

  const [avatarOpened, openAvatar, closeAvatar] = useBooleanState(false)

  return (
    <div>
      <Flex>
        <Box width="9rem" height="9rem" as="button" onClick={openAvatar}>
          <Avatar src={user.avatar} />
          {avatarOpened && (
            <Lightbox mainSrc={user.avatar} onCloseRequest={closeAvatar} />
          )}
        </Box>
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
    </div>
  )
}

UserInfo.propTypes = {
  user: User.isRequired,
}
