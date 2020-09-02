import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Icon, Text} from 'ui'
import {PublicationCard} from '../PublicationCard'

export const PostCard = ({publication}) => (
  <PublicationCard publication={publication}>
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <Icon icon="comment" size="1.5rem" />
        <Box marginLeft="1ex">
          <Text>{publication.commentsCount}</Text>
        </Box>
      </Flex>
      <Flex alignItems="center">
        <Icon icon="love" size="1.5rem" />
        <Box marginLeft="1ex">
          <Text>{publication.commentsCount}</Text>
        </Box>
      </Flex>
    </Flex>
  </PublicationCard>
)

PostCard.propTypes = {
  publication: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    commentsCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    hasMyLike: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
