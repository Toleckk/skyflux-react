import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Icon, Text} from 'ui'
import {Post} from 'models/post'
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
  publication: Post.isRequired,
}
