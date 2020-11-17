import React from 'react'
import {getEvents} from 'models/event'
import {Loader} from 'ui'
import {useMyQuery} from '../../hooks'
import {EventList} from '../../molecules'

export const EventsDisplay = () => {
  const {data, loading, fetchMore} = useMyQuery({
    ...getEvents({first: 25}),
    fetchPolicy: 'network-only',
  })

  return loading ? (
    <Loader />
  ) : (
    <EventList events={data?.getEvents} onMore={fetchMore} />
  )
}
