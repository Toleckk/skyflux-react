import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {useAsync} from '@react-hook/async'
import {handleMore} from 'utils'
import {EVENT_UPDATED, EVENTS} from 'models/event'
import {useLoader, usePersist} from 'features/shared/hooks'

export const useEvents = () => {
  usePersist(EVENTS)

  const {data, loading, subscribeToMore, fetchMore} = useQuery(EVENTS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {first: 25},
  })

  useEffect(
    () =>
      subscribeToMore({
        document: EVENT_UPDATED,
        updateQuery: ({events}, {subscriptionData: {data}}) => ({
          events: handleMore(events, data.eventUpdated),
        }),
      }),
    [subscribeToMore],
  )

  const events = data?.events

  const [{status}, more] = useAsync(() =>
    fetchMore({variables: {after: events?.pageInfo.endCursor}}),
  )

  const isInitialLoading = loading && status !== 'loading' && !events
  useLoader(loading && status !== 'loading' && !!events)

  return {events, loading: isInitialLoading, more}
}
