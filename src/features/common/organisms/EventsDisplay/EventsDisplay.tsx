import React from 'react'
import {Loader} from 'ui'
import {EventList} from '../../molecules'
import {useEvents} from '../../hooks'

export const EventsDisplay: React.FC = () => {
  const {events, loading, more} = useEvents()

  return loading || !events ? (
    <Loader />
  ) : (
    <EventList events={events} onMore={more} />
  )
}
