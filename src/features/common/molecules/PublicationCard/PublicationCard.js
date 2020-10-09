import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Date, SecondaryText} from 'ui'
import {MiniUser} from 'models/user'
import {UserBadge} from '../UserBadge'

export const PublicationCard = ({publication, children}) => {
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <Box flex={1}>
          <UserBadge user={publication.user} />
        </Box>
        <Date date={publication.createdAt} />
      </Flex>
      <Box margin="5px 0 10px">
        <SecondaryText>{publication.text}</SecondaryText>
      </Box>
      {children}
    </Flex>
  )
}

PublicationCard.propTypes = {
  publication: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    user: MiniUser.isRequired,
  }).isRequired,
  children: PropTypes.node,
}
