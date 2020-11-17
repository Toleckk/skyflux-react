import {useCallback} from 'react'
import {useQuery} from '@apollo/client'
import {GET_FOUND_POSTS} from 'models/post'

export const useSearchPosts = (text, step = 25) => {
  const {data, loading, fetchMore} = useQuery(GET_FOUND_POSTS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: {
      text,
      first: step,
    },
  })

  const more = useCallback(
    () =>
      fetchMore({
        variables: {after: data?.getFoundPosts?.pageInfo?.endCursor},
      }),
    [data, fetchMore],
  )

  return {
    posts: data?.getFoundPosts,
    loading,
    more,
  }
}
