import {useCallback, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {handleMore} from 'utils'
import {EVENT_UPDATED, EVENTS} from 'models/event'

export const useEvents = () => {
  const {data, loading, subscribeToMore, fetchMore} = useQuery(EVENTS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: {
      first: 25,
    },
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

  const more = useCallback(
    () => fetchMore({variables: {after: events?.pageInfo.endCursor}}),
    [fetchMore, events],
  )

  return {events, loading, more}
}
