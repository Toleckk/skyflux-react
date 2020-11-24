import React from 'react'
import {Loader} from 'ui'
import {useEvents} from '../../hooks'
import {EventList} from '..'

export const EventsDisplay: React.FC = () => {
  const {events, loading, more} = useEvents()

  return loading || !events ? (
    <Loader />
  ) : (
    <EventList events={events} onMore={more} />
  )
}
