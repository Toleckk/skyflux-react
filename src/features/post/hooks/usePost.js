import {useCallback, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {POST} from 'models/post'
import {COMMENT_UPDATED} from 'models/comment'
import {handleMore} from 'utils'
import {LIKE_UPDATED} from '../../../models/like'

export const usePost = _id => {
  const {data, loading, fetchMore, subscribeToMore} = useQuery(POST, {
    variables: {_id, firstComments: 25},
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  useEffect(
    () =>
      subscribeToMore({
        document: COMMENT_UPDATED,
        variables: {postId: _id},
        updateQuery: ({post}, {subscriptionData: {data}}) => ({
          post: handleMore(post, data.commentUpdated, 'comments'),
        }),
      }),
    [_id, subscribeToMore],
  )

  useEffect(
    () =>
      subscribeToMore({
        document: LIKE_UPDATED,
        variables: {postId: _id},
        updateQuery: ({post}, {subscriptionData: {data}}) => ({
          post: {
            ...post,
            ...(data?.likeUpdated?.post || {}),
          },
        }),
      }),
    [_id, subscribeToMore],
  )

  const post = data?.post
  const comments = post?.comments

  const moreComments = useCallback(
    () =>
      fetchMore({
        variables: {
          firstComments: 25,
          afterComment: comments?.pageInfo?.endCursor,
        },
      }),
    [fetchMore, comments],
  )

  return {post, loading, comments, moreComments}
}
