import {useCallback, useEffect} from 'react'
import {ApolloQueryResult, useQuery} from '@apollo/client'
import {handleMore} from '@skyflux/react/utils'
import {useMe} from '@skyflux/react/features/shared/hooks'
import {
  SUB_REQUESTS,
  SubRequests,
  SubRequests_subRequests,
  SUBS_UPDATED,
} from '../graphql'

export type UseSubRequestsResult = {
  requests?: SubRequests_subRequests
  loading: boolean
  more: () => Promise<ApolloQueryResult<SubRequests>>
}

export const useSubRequests = (): UseSubRequestsResult => {
  const {me} = useMe()

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
        document: SUBS_UPDATED,
        variables: {myId: me?._id},
        updateQuery: ({subRequests}, {subscriptionData: {data}}) => ({
          subRequests: handleMore(
            subRequests,
            data && 'accepted' in data.subsUpdated && data.subsUpdated.accepted
              ? {...data.subsUpdated, deleted: true}
              : data?.subsUpdated,
          ),
        }),
      }),
    [subscribeToMore, me],
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
