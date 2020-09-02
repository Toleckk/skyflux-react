import React from 'react'
import PropTypes from 'prop-types'
import {Box} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {Avatar} from 'ui'
import {StyledContainer, StyledNickname} from './styles'

export const UserCard = ({user}) => (
  <Link to={'/@' + user.nickname}>
    <StyledContainer>
      <Box width="7.5rem" height="7.5rem">
        <Avatar src={user.avatar} />
      </Box>
      <Box marginTop="1.5rem">
        <StyledNickname>@{user.nickname}</StyledNickname>
      </Box>
    </StyledContainer>
  </Link>
)

UserCard.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
}
