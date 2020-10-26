import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {Avatar} from 'ui'
import {MiniUser} from 'models/user'
import {StyledContainer, StyledNickname} from './styles'

export const UserCard = ({user, children}) => {
  const link = '/@' + user.nickname

  const Component = useMemo(() => (children ? 'div' : Link), [children])

  return (
    <Component to={link}>
      <StyledContainer>
        <Box as={Link} to={link} width="5em" height="5em">
          <Avatar src={user.avatar} />
        </Box>
        <Box as={Link} to={link} marginTop="1rem">
          <StyledNickname>@{user.nickname}</StyledNickname>
        </Box>
        {children}
      </StyledContainer>
    </Component>
  )
}

UserCard.propTypes = {
  user: MiniUser.isRequired,
  children: PropTypes.node,
}
