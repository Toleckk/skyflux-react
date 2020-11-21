import {useCallback} from 'react'
import {ApolloQueryResult, useQuery} from '@apollo/client'
import {USERS, Users, Users_users} from '../graphql'

export type UseSearchUsersResult = {
  users?: Users_users | null
  loading: boolean
  more: () => Promise<ApolloQueryResult<Users>>
}

export const useSearchUsers = (
  query: string,
  step = 24,
): UseSearchUsersResult => {
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
