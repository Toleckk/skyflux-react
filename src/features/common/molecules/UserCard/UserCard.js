import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {Avatar} from 'ui'
import {MiniUser} from 'models/user'
import {StyledContainer, StyledNickname} from './styles'

export const UserCard = ({user, children}) => {
  const link = '/@' + user.nickname

  const Wrap = useMemo(() => (children ? 'div' : Link), [children])
  const Child = useMemo(() => (Wrap === 'div' ? Link : 'div'), [Wrap])

  return (
    <Wrap to={link}>
      <StyledContainer>
        <Box as={Child} to={link} width="5em" height="5em">
          <Avatar src={user.avatar} />
        </Box>
        <Box as={Child} to={link} marginTop="1rem">
          <StyledNickname>@{user.nickname}</StyledNickname>
        </Box>
        {children}
      </StyledContainer>
    </Wrap>
  )
}

UserCard.propTypes = {
  user: MiniUser.isRequired,
  children: PropTypes.node,
}
