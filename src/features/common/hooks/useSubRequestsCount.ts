import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {useMe} from '@skyflux/react/features/shared/hooks'
import {SUB_REQUESTS_COUNT, SUBS_UPDATED} from '../graphql'

export type UseSubRequestsCountResult = {
  count: number
  loading: boolean
}

export const useSubRequestsCount = (): UseSubRequestsCountResult => {
  const {me} = useMe()

  const {data, loading, refetch, subscribeToMore} = useQuery(
    SUB_REQUESTS_COUNT,
    {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
  )

  useEffect(
    () =>
      subscribeToMore({
        document: SUBS_UPDATED,
        variables: {myId: me?._id},
        updateQuery: prev => {
          refetch()
          return prev
        },
      }),
    [subscribeToMore, refetch, me],
  )

  return {count: data?.subRequestsCount || 0, loading}
}
