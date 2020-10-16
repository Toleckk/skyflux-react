import {useQuery} from '@apollo/client'
import {useUpdateSubscriptions} from './useUpdateSubscriptions'
import {usePaginatedFetchMore} from './usePaginatedFetchMore'

export const useMyQuery = ({query, subscriptions, ...options}) => {
  const queryResult = useQuery(query, options)

  useUpdateSubscriptions({subscriptions, ...queryResult})

  const handledFetchMore = usePaginatedFetchMore({
    ...queryResult,
    ...options,
    query,
  })

  return {...queryResult, fetchMore: handledFetchMore}
}
