import {useCallback} from 'react'
import {ApolloQueryResult, useQuery} from '@apollo/client'
import {POSTS} from '../graphql'
import {Posts, Posts_posts} from '../graphql/types/Posts'

export type UseSearchPostsResult = {
  posts?: Posts_posts
  loading: boolean
  more: () => Promise<ApolloQueryResult<Posts>>
}

export const useSearchPosts = (
  query: string,
  step = 25,
): UseSearchPostsResult => {
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
