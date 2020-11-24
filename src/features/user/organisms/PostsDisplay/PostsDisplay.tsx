import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {PostList} from 'features/shared/molecules'
import {User_user_posts} from '../../graphql'
import {useDeletePost} from '../../hooks'

export type PostsDisplayProps = {
  posts: User_user_posts
  onMore: () => unknown
}

export const PostsDisplay = memo<PostsDisplayProps>(({posts, onMore}) => {
  const {t} = useTranslation('post', {useSuspense: false})

  const {deletePost, ConfirmDeletePostModal} = useDeletePost()

  return (
    <>
      <PostList posts={posts} onPostDelete={deletePost} onMore={onMore} />
      <ConfirmDeletePostModal
        text={t('Are you sure you want to delete this post?')}
        icon="trash"
      />
    </>
  )
})
