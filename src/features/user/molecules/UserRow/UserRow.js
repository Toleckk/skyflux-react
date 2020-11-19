import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar} from 'ui'
import {me, MiniUser} from 'models/user'
import {useIsMe, useMyQuery} from 'features/shared/hooks'
import {BigNickname} from '../../atoms'
import {SubscribeButton} from '../../organisms'

export const UserRow = ({user}) => {
  const isMe = useIsMe(user)
  const {data} = useMyQuery(me())

  return (
    <Flex padding="0.5rem" alignItems="center">
      <Box height="2.5rem" width="2.5rem" margin="0 1rem 0 0.5rem">
        <Avatar src={user.avatar} />
      </Box>
      <Box flex={1}>
        <BigNickname>{user.nickname}</BigNickname>
      </Box>
      {!isMe && data.me && <SubscribeButton user={user} />}
    </Flex>
  )
}

UserRow.propTypes = {
  user: MiniUser.isRequired,
}
