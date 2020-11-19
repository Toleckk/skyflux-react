import React, {memo, useCallback} from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {PostConnection, DELETE_POST} from 'models/post'
import {useConfirmDialog} from 'features/shared/hooks'
import {PostList} from 'features/shared/molecules'
import {useMutation} from '@apollo/client'

export const PostsDisplay = memo(({posts, onMore}) => {
  const {t} = useTranslation('post', {useSuspense: false})

  const [del] = useMutation(DELETE_POST)
  const [deleteWithConfirmation, Modal] = useConfirmDialog(del)

  const deletePost = useCallback(
    post => deleteWithConfirmation({variables: post}),
    [deleteWithConfirmation],
  )

  return (
    <>
      <PostList posts={posts} onPostDelete={deletePost} onMore={onMore} />
      <Modal
        text={t('Are you sure you want to delete this post?')}
        icon="trash"
      />
    </>
  )
})

PostsDisplay.propTypes = {
  posts: PostConnection.isRequired,
  onMore: PropTypes.func.isRequired,
}
