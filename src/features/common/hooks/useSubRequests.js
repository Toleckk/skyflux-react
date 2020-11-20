import {useCallback, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {handleMore} from 'utils'
import {SUB_REQUESTS, SUB_UPDATED} from '../graphql'

export const useSubRequests = () => {
  const {data, loading, fetchMore, subscribeToMore} = useQuery(SUB_REQUESTS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: {
      first: 25,
    },
  })

  useEffect(
    () =>
      subscribeToMore({
        document: SUB_UPDATED,
        updateQuery: ({subRequests}, {subscriptionData: {data}}) => ({
          subRequests: handleMore(
            subRequests,
            data?.subUpdated.accepted
              ? {...data.subUpdated, deleted: true}
              : data?.subUpdated,
          ),
        }),
      }),
    [subscribeToMore],
  )

  const requests = data?.subRequests

  const more = useCallback(
    () =>
      fetchMore({
        variables: {
          after: requests?.pageInfo?.endCursor,
        },
      }),
    [fetchMore, requests],
  )

  return {
    requests,
    loading,
    more,
  }
}
