import React from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {useInfiniteScroll} from 'utils'
import {H1, Loader} from 'ui'
import {deleteComment, getCommentsByPostId} from 'models/comment'
import {
  useConfirmDialog,
  useMyMutation,
  useMyQuery,
} from 'features/common/hooks'
import {CommentList} from 'features/common/molecules'

export const CommentsDisplay = ({postId}) => {
  const {t} = useTranslation('post')

  const {data, loading, fetchMore} = useMyQuery(
    getCommentsByPostId(postId, {first: 25}),
  )

  const comments = data?.getCommentsByPostId?.edges
  const hasMore = data?.getCommentsByPostId?.pageInfo?.hasNextPage

  const commentsContainerRef = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore,
    direction: 'up',
  })

  const [del] = useMyMutation(deleteComment())
  const [deleteWithConfirmation, Modal] = useConfirmDialog(del)

  return loading ? (
    <Loader />
  ) : !comments.length ? (
    <H1>{t('Be the first to comment')}</H1>
  ) : (
    <>
      <CommentList
        comments={comments}
        ref={commentsContainerRef}
        loading={hasMore}
        onCommentDelete={deleteWithConfirmation}
      />
      <Modal
        text={t('Are you sure you want to delete this comment?')}
        icon="trash"
      />
    </>
  )
}

CommentsDisplay.propTypes = {
  postId: PropTypes.string.isRequired,
}
