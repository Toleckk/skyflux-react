import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {Icon, Text} from 'ui'
import {deletePost, Post} from 'models/post'
import {createLike, deleteLike} from 'models/like'
import {useIsMe, useMyMutation} from '../../hooks'
import {PublicationCard} from '../PublicationCard'

export const PostCard = ({publication}) => {
  const isMe = useIsMe(publication.user)
  const [like] = useMyMutation(createLike({postId: publication._id}))
  const [unlike] = useMyMutation(deleteLike({postId: publication._id}))
  const [remove] = useMyMutation(deletePost({_id: publication._id}))

  const onClick = useCallback(
    () => (publication.isLikedByMe ? unlike() : like()),
    [publication.isLikedByMe, like, unlike],
  )

  return (
    <PublicationCard
      publication={publication}
      onDelete={isMe && (() => remove())}
    >
      <Flex justifyContent="space-between">
        <Flex alignItems="center" as={Link} to={'/post/' + publication._id}>
          <Icon icon="comment" size="1.5rem" />
          <Box marginLeft="1ex">
            <Text>{publication.commentsCount}</Text>
          </Box>
        </Flex>
        <Flex alignItems="center" as="button" onClick={onClick}>
          <Icon icon="love" size="1.5rem" />
          <Box marginLeft="1ex">
            <Text>{publication.likesCount}</Text>
          </Box>
        </Flex>
      </Flex>
    </PublicationCard>
  )
}

PostCard.propTypes = {
  publication: Post.isRequired,
}
