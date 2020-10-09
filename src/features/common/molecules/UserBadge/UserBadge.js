import React from 'react'
import {MiniUser} from 'models/user'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar} from 'ui'
import {StyledNickname} from './styles'

export const UserBadge = ({user}) => (
  <Flex alignItems="center">
    <Box width="2rem" height="2rem">
      <Avatar src={user.avatar} />
    </Box>
    <Box marginLeft="1rem">
      <StyledNickname>{user.nickname}</StyledNickname>
    </Box>
  </Flex>
)

UserBadge.propTypes = {
  user: MiniUser.isRequired,
}
