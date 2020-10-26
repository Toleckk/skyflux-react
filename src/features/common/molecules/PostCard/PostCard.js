import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Icon, Text} from 'ui'
import {deletePost, Post} from 'models/post'
import {createLike, deleteLike} from 'models/like'
import {useConfirmDialog, useIsMe, useModal, useMyMutation} from '../../hooks'
import {PublicationCard} from '../PublicationCard'
import {StyledLikeIcon} from './styles'

export const PostCard = ({publication}) => {
  const {t} = useTranslation('post')
  const {open} = useModal('post')

  const isMe = useIsMe(publication.user)
  const [like] = useMyMutation(createLike({postId: publication._id}))
  const [unlike] = useMyMutation(deleteLike({postId: publication._id}))
  const [remove] = useMyMutation(deletePost({_id: publication._id}))

  const [removeWithConfirmation, Modal] = useConfirmDialog(remove)

  const onClick = useCallback(
    () => (publication.isLikedByMe ? unlike() : like()),
    [publication.isLikedByMe, like, unlike],
  )

  const openPost = useCallback(() => open(publication._id), [
    open,
    publication._id,
  ])

  return (
    <PublicationCard
      publication={publication}
      onDelete={isMe && (() => removeWithConfirmation())}
    >
      <Flex justifyContent="space-between">
        <Flex alignItems="center" as="button" onClick={openPost}>
          <Icon icon="comment" size="1.5rem" />
          <Box marginLeft="1ex">
            <Text>{publication.commentsCount}</Text>
          </Box>
        </Flex>
        <Flex alignItems="center" as="button" onClick={onClick}>
          <StyledLikeIcon
            icon="love"
            size="1.5rem"
            active={publication.isLikedByMe}
          />
          <Box marginLeft="1ex">
            <Text>{publication.likesCount}</Text>
          </Box>
        </Flex>
      </Flex>
      <Modal
        text={t('Are you sure you want to delete this post?')}
        icon="trash"
      />
    </PublicationCard>
  )
}

PostCard.propTypes = {
  publication: Post.isRequired,
}
