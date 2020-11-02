import React, {Suspense} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useInfiniteScroll} from 'utils'
import {Divider, H1, Loader} from 'ui'
import {CommentList, PostCard} from 'features/common/molecules'
import {useMyQuery} from 'features/common/hooks'
import {getPostById, ID} from 'models/post'
import {getCommentsByPostId} from 'models/comment'
import {CommentForm} from '..'

export const PostDisplay = ({_id}) => {
  const {t} = useTranslation('post')

  const {data: postData, loading: postLoading} = useMyQuery(getPostById(_id))
  const {data: commentsData, loading: commentsLoading, fetchMore} = useMyQuery(
    getCommentsByPostId(_id, {first: 25}),
  )

  const hasMore = commentsData?.getCommentsByPostId?.pageInfo?.hasNextPage

  const commentsContainerRef = useInfiniteScroll({
    fetchMore,
    loading: commentsLoading,
    hasMore,
    direction: 'up',
  })

  const post = postData?.getPostById
  const comments = commentsData?.getCommentsByPostId?.edges

  return (
    <Flex flexDirection="column" maxHeight="100vh" height="100%">
      <Suspense fallback={<Loader />}>
        {postLoading || commentsLoading ? (
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
              {!comments.length ? (
                <H1>{t('Be the first to comment')}</H1>
              ) : (
                <CommentList
                  comments={comments}
                  ref={commentsContainerRef}
                  loading={hasMore}
                />
              )}
            </Flex>
            <Divider />
            <CommentForm post={post} />
          </>
        )}
      </Suspense>
    </Flex>
  )
}

PostDisplay.propTypes = {
  _id: ID.isRequired,
}
