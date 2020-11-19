import React, {memo} from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {deletePost, PostConnection} from 'models/post'
import {useConfirmDialog, useMyMutation} from 'features/shared/hooks'
import {PostList} from 'features/shared/molecules'

export const PostsDisplay = memo(({posts, onMore}) => {
  const {t} = useTranslation('post', {useSuspense: false})

  const [del] = useMyMutation(deletePost())
  const [deleteWithConfirmation, Modal] = useConfirmDialog(del)

  return (
    <>
      <PostList
        posts={posts}
        onPostDelete={deleteWithConfirmation}
        onMore={onMore}
      />
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
