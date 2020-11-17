import {useCallback} from 'react'
import {useQuery} from '@apollo/client'
import {GET_POST_BY_ID} from 'models/post'

export const usePost = _id => {
  const {data, loading, fetchMore} = useQuery(GET_POST_BY_ID, {
    variables: {_id, firstComments: 25},
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  const post = data?.getPostById
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
