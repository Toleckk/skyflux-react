import React, {useMemo} from 'react'
import {Box} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {Avatar} from '@skyflux/react/ui'
import {StyledContainer, StyledNickname} from './styles'
import {UserBadgeFragment} from '../../graphql'

export type UserCardProps = {
  user: UserBadgeFragment
}

export const UserCard: React.FC<UserCardProps> = ({user, children}) => {
  const link = '/@' + user.nickname

  const Wrap: any = useMemo(() => (children ? 'div' : Link), [children])
  const Child = useMemo(() => (Wrap === 'div' ? Link : 'div'), [Wrap])

  return (
    <Wrap to={link}>
      <StyledContainer>
        <Box
          as={Child}
          width="5em"
          height="5em"
          {...(Child === Link ? {to: link} : {})}
        >
          <Avatar src={user.avatar} />
        </Box>
        <Box
          as={Child}
          marginTop="1rem"
          {...(Child === Link ? {to: link} : {})}
        >
          <StyledNickname>@{user.nickname}</StyledNickname>
        </Box>
        {children}
      </StyledContainer>
    </Wrap>
  )
}
