import React from 'react'
import {getEvents} from 'models/event'
import {Loader} from 'ui'
import {useInfiniteScroll} from 'utils'
import {useMyQuery} from '../../hooks'
import {EventList} from '../../molecules'

export const EventsDisplay = () => {
  const {data, loading, fetchMore} = useMyQuery(getEvents({first: 25}))
  const edges = data?.getEvents?.edges

  const ref = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore: data?.getEvents?.pageInfo?.hasNextPage,
    threshold: '100px',
  })

  return loading ? <Loader /> : <EventList events={edges} ref={ref} />
}
