import {useCallback, useEffect} from 'react'
import {ApolloQueryResult, useQuery} from '@apollo/client'
import {handleMore} from 'utils'
import {
  SUB_REQUESTS,
  SUB_UPDATED,
  SubRequests,
  SubRequests_subRequests,
} from '../graphql'

export type UseSubRequestsResult = {
  requests?: SubRequests_subRequests
  loading: boolean
  more: () => Promise<ApolloQueryResult<SubRequests>>
}

export const useSubRequests = (): UseSubRequestsResult => {
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
            data && 'accepted' in data.subUpdated && data.subUpdated.accepted
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
