import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {SUB_REQUESTS_COUNT, SUB_UPDATED} from '../graphql'

export type UseSubRequestsCountResult = {
  count: number
  loading: boolean
}

export const useSubRequestsCount = (): UseSubRequestsCountResult => {
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
        document: SUB_UPDATED,
        updateQuery: prev => {
          refetch()
          return prev
        },
      }),
    [subscribeToMore, refetch],
  )

  return {count: data?.subRequestsCount || 0, loading}
}
