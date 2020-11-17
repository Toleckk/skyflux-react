import {useQuery} from '@apollo/client'
import {GET_FOUND_USERS} from 'models/user'
import {useCallback} from 'react'

export const useSearchUsers = (text, step = 24) => {
  const {data, loading, fetchMore} = useQuery(GET_FOUND_USERS, {
    variables: {
      text,
      first: step,
    },
  })

  const more = useCallback(
    () =>
      fetchMore({
        variables: {
          after: data?.getFoundUsers?.pageInfo.endCursor,
        },
      }),
    [fetchMore, data],
  )

  return {users: data?.getFoundUsers, loading, more}
}
