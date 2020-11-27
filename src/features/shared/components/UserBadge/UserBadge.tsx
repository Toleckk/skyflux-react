import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar} from '@skyflux/react/ui'
import {StyledNickname} from './styles'
import {UserBadgeFragment} from '../../graphql'

export type UserBadgeProps = {
  user: UserBadgeFragment
}

export const UserBadge: React.FC<UserBadgeProps> = ({user}) => (
  <Flex alignItems="center">
    <Box width="2em" height="2em" flexShrink={0}>
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
