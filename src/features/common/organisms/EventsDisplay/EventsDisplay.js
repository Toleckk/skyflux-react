import React from 'react'
import {useMyQuery} from 'features/common/hooks'
import {getEvents} from 'models/event'
import {Loader} from 'ui'
import {EventList} from '../../molecules'

export const EventsDisplay = () => {
  const {data, loading} = useMyQuery(getEvents())

  const events = data?.getEvents?.edges

  if (loading) return <Loader />

  return <EventList events={events} />
}
