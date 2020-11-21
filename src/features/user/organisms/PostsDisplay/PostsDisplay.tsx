import React, {memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useConfirmDialog} from 'features/shared/hooks'
import {PostList} from 'features/shared/molecules'
import {useMutation} from '@apollo/client'
import {DELETE_POST, User_user_posts} from '../../graphql'

export type PostsDisplayProps = {
  posts: User_user_posts
  onMore: () => unknown
}

export const PostsDisplay = memo<PostsDisplayProps>(({posts, onMore}) => {
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
