import React from 'react'
import {events} from 'models/event'
import {Loader} from 'ui'
import {useMyQuery} from '../../hooks'
import {EventList} from '../../molecules'

export const EventsDisplay = () => {
  const {data, loading, fetchMore} = useMyQuery({
    ...events({first: 25}),
    fetchPolicy: 'network-only',
  })

  return loading ? (
    <Loader />
  ) : (
    <EventList events={data?.events} onMore={fetchMore} />
  )
}
