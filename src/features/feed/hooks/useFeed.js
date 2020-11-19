import {useEffect} from 'react'
import {useAsync} from '@react-hook/async'
import {useQuery} from '@apollo/client'
import {FEED} from 'models/post'
import {SUB_UPDATED} from 'models/sub'
import {useLoader, useMe, usePersist} from 'features/shared/hooks'

export const useFeed = () => {
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
        document: SUB_UPDATED,
        updateQuery: (_, {subscriptionData: {data}}) =>
          data?.subUpdated &&
          isMe(data.subUpdated.from) &&
          data?.subUpdated?.accepted &&
          refetch(),
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
