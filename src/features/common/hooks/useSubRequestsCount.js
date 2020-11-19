import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {SUB_REQUESTS_COUNT, SUB_UPDATED} from 'models/sub'

export const useSubRequestsCount = () => {
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
        updateQuery: () => refetch(),
      }),
    [subscribeToMore, refetch],
  )

  return {count: data?.subRequestsCount || 0, loading}
}
