import {useEffect} from 'react'
import {useAsync} from '@react-hook/async'
import {useQuery} from '@apollo/client'
import {useLoader, usePersist} from '@skyflux/react/features/shared/hooks'
import {handleMore} from '@skyflux/react/utils'
import {FEED, Feed_feed, FEED_UPDATED} from '../graphql'

export type UseFeedResult = {
  posts?: Feed_feed
  loading: boolean
  more: () => unknown
}

export const useFeed = (): UseFeedResult => {
  usePersist(FEED)

  const {data, fetchMore, loading, subscribeToMore} = useQuery(FEED, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {first: 25},
  })

  useEffect(() =>
    subscribeToMore({
      document: FEED_UPDATED,
      updateQuery: ({feed}, {subscriptionData: {data}}) => ({
        feed: handleMore(feed, data.feedUpdated),
      }),
    }),
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
