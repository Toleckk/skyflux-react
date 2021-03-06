import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar} from '@skyflux/react/ui'
import {useMe} from '@skyflux/react/features/shared/hooks'
import {BigNickname, SubscribeButton} from '../../components'
import {User_user} from '../../graphql'

export type UserRowProps = {
  user: User_user
}

export const UserRow: React.FC<UserRowProps> = ({user}) => {
  const {me, isMe} = useMe()

  return (
    <Flex padding="0.5rem" alignItems="center">
      <Box height="2.5rem" width="2.5rem" margin="0 1rem 0 0.5rem">
        <Avatar src={user.avatar} />
      </Box>
      <Box flex={1}>
        <BigNickname>{user.nickname}</BigNickname>
      </Box>
      {me && !isMe(user) && <SubscribeButton user={user} />}
    </Flex>
  )
}
