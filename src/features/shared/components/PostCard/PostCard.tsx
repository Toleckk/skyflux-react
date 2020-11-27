import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Text} from '@skyflux/react/typography'
import {Icon} from '@skyflux/react/ui'
import {StyledLikeIcon} from './styles'
import {useMe, useModal, useToggleLike} from '../../hooks'
import {PublicationCard} from '../PublicationCard'
import {PostFragment} from '../../graphql'

export type PostCardProps = {
  post: PostFragment
  onDelete?: (post: PostFragment) => unknown
}

export const PostCard: React.FC<PostCardProps> = ({post, onDelete}) => {
  const {open} = useModal('post')

  const {isMe} = useMe()

  const {toggle} = useToggleLike(post)

  const openPost = useCallback(() => open(post._id), [open, post._id])

  const deletePost = useCallback(() => onDelete?.(post), [onDelete, post])

  return (
    <PublicationCard
      publication={post}
      onDelete={isMe(post.user) && !!onDelete && deletePost}
    >
      <Flex justifyContent="space-between">
        <Flex alignItems="center" as="button" onClick={openPost}>
          <Icon icon="comment" size="1.5rem" />
          <Box marginLeft="1ex">
            <Text>{post.commentsCount}</Text>
          </Box>
        </Flex>
        <Flex alignItems="center" as="button" onClick={toggle}>
          <StyledLikeIcon
            icon="love"
            size="1.5rem"
            $isActive={post.isLikedByMe}
          />
          <Box marginLeft="1ex">
            <Text>{post.likesCount}</Text>
          </Box>
        </Flex>
      </Flex>
    </PublicationCard>
  )
}
