import {useQuery} from '@apollo/client'
import {USERS} from 'models/user'
import {useCallback} from 'react'

export const useSearchUsers = (query, step = 24) => {
  const {data, loading, fetchMore} = useQuery(USERS, {
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
