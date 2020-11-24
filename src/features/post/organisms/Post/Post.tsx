import React, {Suspense} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Divider, Loader} from 'ui'
import {CommentList, PostCard} from 'features/shared/molecules'
import {CommentForm} from '..'
import {useDeleteComment, usePost} from '../../hooks'

export type PostProps = {
  _id: string
}

export const Post: React.FC<PostProps> = ({_id}) => {
  const {t} = useTranslation('post')
  const {post, loading, comments, moreComments} = usePost(_id)

  const {deleteComment, ConfirmDeleteCommentModal} = useDeleteComment()

  return (
    <Flex flexDirection="column" maxHeight="100vh" height="100%">
      <Suspense fallback={<Loader />}>
        {loading || !post || !comments ? (
          <Loader />
        ) : (
          <>
            <PostCard post={post} />
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
                onCommentDelete={deleteComment}
              />
              <ConfirmDeleteCommentModal
                text={t('Are you sure you want to delete this comment?')}
                icon="trash"
              />
            </Flex>
            <Divider />
            <CommentForm postId={post._id} />
          </>
        )}
      </Suspense>
    </Flex>
  )
}
