import React from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {Flex} from 'reflexbox/styled-components'
import {useInfiniteScroll} from 'utils'
import {H1, Loader} from 'ui'
import {deletePost, getPostsByNickname} from 'models/post'
import {
  useConfirmDialog,
  useMyMutation,
  useMyQuery,
} from 'features/common/hooks'
import {PostList} from 'features/common/molecules'

export const PostsDisplay = ({nickname}) => {
  const {t} = useTranslation('user')

  const {data, loading, fetchMore} = useMyQuery(
    getPostsByNickname(nickname, {first: 25}),
  )

  const posts = data?.getPostsByNickname?.edges
  const hasMore = data?.getPostsByNickname?.pageInfo?.hasNextPage

  const postsContainerRef = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore,
  })

  const [del] = useMyMutation(deletePost())
  const [deleteWithConfirmation, Modal] = useConfirmDialog(del)

  return loading ? (
    <Loader />
  ) : !posts.length ? (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <H1 center>{t("This user hasn't publish any posts yet")}</H1>
    </Flex>
  ) : (
    <>
      <PostList
        posts={posts}
        ref={postsContainerRef}
        loading={hasMore}
        onPostDelete={deleteWithConfirmation}
      />
      <Modal
        text={t('Are you sure you want to delete this post?')}
        icon="trash"
      />
    </>
  )
}

PostsDisplay.propTypes = {
  nickname: PropTypes.string.isRequired,
}
