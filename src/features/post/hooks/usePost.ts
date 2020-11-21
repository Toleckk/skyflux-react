import {useCallback, useEffect} from 'react'
import {ApolloQueryResult, useQuery} from '@apollo/client'
import {handleMore} from 'utils'
import {
  COMMENT_UPDATED,
  LIKE_UPDATED,
  Post,
  POST,
  Post_post,
  Post_post_comments,
} from '../graphql'

export type UsePostResult = {
  post?: Post_post | null
  loading: boolean
  comments?: Post_post_comments
  moreComments: () => Promise<ApolloQueryResult<Post>>
}

export const usePost = (_id: string): UsePostResult => {
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
          post: post && {
            ...post,
            comments: handleMore(post.comments, data.commentUpdated),
          },
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
          post: post && {
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
