import {useCallback} from 'react'
import {useQuery} from '@apollo/client'
import {USERS} from '../graphql'

export const useSearchUsers = (query, step = 24) => {
  const {data, loading, fetchMore} = useQuery(USERS, {
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
        variables: {
          after: data?.users?.pageInfo.endCursor,
        },
      }),
    [fetchMore, data],
  )

  return {users: data?.users, loading, more}
}
