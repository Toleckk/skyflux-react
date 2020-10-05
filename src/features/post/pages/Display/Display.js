import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useParams} from 'react-router'
import {useInfiniteScroll} from 'utils'
import {Loader} from 'ui'
import {CommentList, PostCard} from 'features/common/molecules'
import {useMyQuery} from 'features/common/hooks'
import {getPostById} from 'models/post'
import {getCommentsByPostId} from 'models/comment'
import {CommentForm} from '../../organisms'

export const Display = () => {
  const {id} = useParams()
  const {data: postData, loading: postLoading} = useMyQuery(getPostById(id))
  const {data: commentsData, loading: commentsLoading, fetchMore} = useMyQuery(
    getCommentsByPostId(id, {first: 25}),
  )

  const commentsContainerRef = useInfiniteScroll({
    fetchMore,
    loading: commentsLoading,
    hasMore: commentsData?.getCommentsByPostId?.pageInfo?.hasNextPage,
    direction: 'up',
  })

  const post = postData?.getPostById
  const comments = commentsData?.getCommentsByPostId?.edges

  return (
    <Flex
      flexDirection="column"
      maxHeight="100vh"
      height="100%"
      paddingBottom="2rem"
    >
      {postLoading ? <Loader /> : <PostCard publication={post} />}
      <Box overflowY="hidden" paddingBottom="1rem">
        {commentsLoading ? (
          <Loader />
        ) : (
          <CommentList comments={comments} ref={commentsContainerRef} />
        )}
      </Box>
      {postLoading ? <Loader /> : <CommentForm post={post} />}
    </Flex>
  )
}
