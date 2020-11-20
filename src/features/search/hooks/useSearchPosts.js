import {useCallback} from 'react'
import {useQuery} from '@apollo/client'
import {POSTS} from '../graphql'

export const useSearchPosts = (query, step = 25) => {
  const {data, loading, fetchMore} = useQuery(POSTS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    skip: !query,
    variables: {
      query,
      first: step,
    },
  })

  const more = useCallback(
    () =>
      fetchMore({
        variables: {after: data?.posts?.pageInfo?.endCursor},
      }),
    [data, fetchMore],
  )

  return {
    posts: data?.posts,
    loading,
    more,
  }
}
