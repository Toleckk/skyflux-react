import React from 'react'
import {useMyQuery} from 'features/common/hooks'
import {getEvents} from 'models/event'
import {Loader} from 'ui'
import {useInfiniteScroll} from 'useInfiniteScroll'
import {EventList} from '../../molecules'

export const EventsDisplay = () => {
  const {data, loading, fetchMore} = useMyQuery(getEvents({first: 25}))

  const events = data?.getEvents?.edges

  const ref = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore: data?.getEvents?.pageInfo?.hasNextPage,
    threshold: '100px',
  })

  if (loading) return <Loader />

  return <EventList events={events} ref={ref} />
}
