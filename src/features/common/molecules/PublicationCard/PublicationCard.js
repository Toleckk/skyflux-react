import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Date, Icon, SecondaryText} from 'ui'
import {MiniUser} from 'models/user'
import {UserBadge} from '../UserBadge'

export const PublicationCard = ({publication, children, onDelete}) => (
  <Flex flexDirection="column">
    <Flex alignItems="center">
      <Box flex={1} marginRight="1rem">
        <UserBadge user={publication.user} />
      </Box>
      <Flex alignItems="flex-start">
        <Date date={publication.createdAt} />
        {!!onDelete && (
          <Box as="button" onClick={onDelete} marginLeft="0.5rem">
            <Icon icon="delete" size="1rem" />
          </Box>
        )}
      </Flex>
    </Flex>
    <Box margin="5px 0 10px">
      <SecondaryText>{publication.text}</SecondaryText>
    </Box>
    {children}
  </Flex>
)

PublicationCard.defaultProps = {
  onDelete: false,
}

PublicationCard.propTypes = {
  publication: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    user: MiniUser.isRequired,
  }).isRequired,
  children: PropTypes.node,
  onDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
}
