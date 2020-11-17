import React, {Suspense} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useMutation} from '@apollo/client'
import {Divider, Loader} from 'ui'
import {DELETE_COMMENT} from 'models/comment'
import {ID} from 'models/post'
import {CommentList, PostCard} from 'features/common/molecules'
import {useConfirmDialog} from 'features/common/hooks'
import {CommentForm} from '..'
import {usePost} from '../../hooks'

export const Post = ({_id}) => {
  const {t} = useTranslation('post')
  const {post, loading, comments, moreComments} = usePost(_id)

  const [deleteComment] = useMutation(DELETE_COMMENT)
  const [deleteCommentWithConfirmation, Modal] = useConfirmDialog(deleteComment)

  return (
    <Flex flexDirection="column" maxHeight="100vh" height="100%">
      <Suspense fallback={<Loader />}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <PostCard publication={post} />
            <Divider />
            <Flex
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              overflowY="hidden"
            >
              <CommentList
                comments={comments}
                onMore={moreComments}
                onCommentDelete={deleteCommentWithConfirmation}
              />
              <Modal
                text={t('Are you sure you want to delete this comment?')}
                icon="trash"
              />
            </Flex>
            <Divider />
            <CommentForm post={post} />
          </>
        )}
      </Suspense>
    </Flex>
  )
}

Post.propTypes = {
  _id: ID.isRequired,
}
