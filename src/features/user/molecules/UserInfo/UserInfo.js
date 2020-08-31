import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Avatar, Icon, Text} from '../../../../ui'
import {About, BigNickname, Stat} from '../../atoms'

export const UserInfo = ({user}) => {
  const {t} = useTranslation('user')

  return (
    <div>
      <Flex>
        <Box width="9rem" height="9rem">
          <Avatar src={user.avatar} />
        </Box>
        <Flex flex={1} justifyContent="space-evenly" alignItems="center">
          <Stat count={user.postsCount} name={t('Users')} icon="post" />
          <Stat count={user.subscriptionsCount} name={t('Read')} icon="user" />
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
            {user.description.birthday}
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
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    postsCount: PropTypes.number.isRequired,
    subscriptionsCount: PropTypes.number.isRequired,
    subscribersCount: PropTypes.number.isRequired,
    description: PropTypes.shape({
      about: PropTypes.string,
      birthday: PropTypes.string,
      from: PropTypes.string,
    }).isRequired,
  }).isRequired,
}
