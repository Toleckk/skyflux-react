import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {SecondaryText} from 'typography'
import {Date, Icon} from 'ui'
import {MiniUser} from 'models/user'
import {UserBadge} from '../UserBadge'
import {StyledContainer} from './styles'

export const PublicationCard = ({publication, children, onDelete, mini}) => (
  <StyledContainer mini={mini}>
    <Flex alignItems="center">
      <Box flex={1} marginRight="1rem">
        <UserBadge user={publication.user} />
      </Box>
      {!mini && (
        <Flex alignItems="flex-start">
          <Date date={publication.createdAt} />
          {!!onDelete && (
            <Box as="button" onClick={onDelete} marginLeft="0.5rem">
              <Icon icon="delete" size="1rem" />
            </Box>
          )}
        </Flex>
      )}
    </Flex>
    <Box margin="5px 0 10px">
      <SecondaryText>{publication.text}</SecondaryText>
    </Box>
    {children}
  </StyledContainer>
)

PublicationCard.defaultProps = {
  onDelete: undefined,
  mini: false,
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
  mini: PropTypes.bool,
}
