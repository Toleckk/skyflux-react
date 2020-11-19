import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Text} from 'typography'
import {Icon} from 'ui'
import {Post} from 'models/post'
import {useMe, useModal, useToggleLike} from '../../hooks'
import {PublicationCard} from '../PublicationCard'
import {StyledLikeIcon} from './styles'

export const PostCard = ({publication, onDelete}) => {
  const {open} = useModal('post')

  const {isMe} = useMe()

  const {toggle} = useToggleLike(publication)

  const openPost = useCallback(() => open(publication._id), [
    open,
    publication._id,
  ])

  const deletePost = useCallback(() => onDelete(publication), [
    onDelete,
    publication,
  ])

  return (
    <PublicationCard
      publication={publication}
      onDelete={isMe(publication.user) && !!onDelete && deletePost}
    >
      <Flex justifyContent="space-between">
        <Flex alignItems="center" as="button" onClick={openPost}>
          <Icon icon="comment" size="1.5rem" />
          <Box marginLeft="1ex">
            <Text>{publication.commentsCount}</Text>
          </Box>
        </Flex>
        <Flex alignItems="center" as="button" onClick={toggle}>
          <StyledLikeIcon
            icon="love"
            size="1.5rem"
            $isActive={publication.isLikedByMe}
          />
          <Box marginLeft="1ex">
            <Text>{publication.likesCount}</Text>
          </Box>
        </Flex>
      </Flex>
    </PublicationCard>
  )
}

PostCard.defaultProps = {
  onDelete: null,
}

PostCard.propTypes = {
  publication: Post.isRequired,
  onDelete: PropTypes.func,
}
