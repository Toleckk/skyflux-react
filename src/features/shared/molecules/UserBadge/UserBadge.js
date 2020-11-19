import React from 'react'
import {Link} from 'react-router-dom'
import {MiniUser} from 'models/user'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar} from 'ui'
import {StyledNickname} from './styles'

export const UserBadge = ({user}) => (
  <Flex alignItems="center">
    <Box width="2em" height="2em">
      <Link to={'/@' + user.nickname}>
        <Avatar src={user.avatar} />
      </Link>
    </Box>
    <Box marginLeft="1em">
      <Link to={'/@' + user.nickname}>
        <StyledNickname>{user.nickname}</StyledNickname>
      </Link>
    </Box>
  </Flex>
)

UserBadge.propTypes = {
  user: MiniUser.isRequired,
}
