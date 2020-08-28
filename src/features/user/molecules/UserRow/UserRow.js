import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar} from '../../../../ui'
import {BigNickname, RoundButton} from '../../atoms'

export const UserRow = ({user}) => (
  <Flex padding="0.5rem" alignItems="center">
    <Box height="2.5rem" width="2.5rem" margin="0 1rem 0 0.5rem">
      <Avatar src={user.avatar} />
    </Box>
    <Box flex={1}>
      <BigNickname>{user.nickname}</BigNickname>
    </Box>
    <RoundButton>Читать</RoundButton>
  </Flex>
)

UserRow.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    nickname: PropTypes.string.isRequired,
  }).isRequired,
}
