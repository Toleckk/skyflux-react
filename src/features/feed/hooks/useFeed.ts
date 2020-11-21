import {useEffect} from 'react'
import {useAsync} from '@react-hook/async'
import {useQuery} from '@apollo/client'
import {useLoader, useMe, usePersist} from 'features/shared/hooks'
import {FEED, SUB_REQUEST_UPDATED} from '../graphql'
import {Feed_feed} from '../graphql/types/Feed'

export type UseFeedResult = {
  posts?: Feed_feed
  loading: boolean
  more: () => unknown
}

export const useFeed = (): UseFeedResult => {
  usePersist(FEED)

  const {data, fetchMore, loading, refetch, subscribeToMore} = useQuery(FEED, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {first: 25},
  })

  const {isMe} = useMe()

  useEffect(
    () =>
      subscribeToMore({
        document: SUB_REQUEST_UPDATED,
        updateQuery: (prev, {subscriptionData: {data}}) => {
          if (
            'from' in data.subUpdated &&
            isMe(data.subUpdated.from) &&
            data.subUpdated.accepted
          )
            refetch()

          return prev
        },
      }),
    [refetch, data, subscribeToMore, isMe],
  )

  const [{status}, more] = useAsync(() =>
    fetchMore({variables: {after: data?.feed?.pageInfo.endCursor}}),
  )

  const isInitialLoading = loading && status !== 'loading' && !data?.feed

  useLoader(loading && status !== 'loading' && !!data?.feed)

  return {
    posts: data?.feed,
    loading: isInitialLoading,
    more,
  }
}
