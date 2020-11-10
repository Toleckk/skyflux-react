import {useQuery} from '@apollo/client'
import {useDeepCompareMemo} from 'use-deep-compare'
import {useUpdateSubscriptions} from './useUpdateSubscriptions'
import {usePaginatedFetchMore} from './usePaginatedFetchMore'

export const useMyQuery = ({query, subscriptions, ...rest}) => {
  const options = useDeepCompareMemo(() => rest, [rest])

  const queryResult = useQuery(query, {
    ...options,
    nextFetchPolicy: 'cache-first',
  })

  useUpdateSubscriptions({subscriptions, ...queryResult})

  const handledFetchMore = usePaginatedFetchMore({
    ...queryResult,
    ...options,
    query,
  })

  return {...queryResult, fetchMore: handledFetchMore}
}
