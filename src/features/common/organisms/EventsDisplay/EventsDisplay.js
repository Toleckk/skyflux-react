import React from 'react'
import {Loader} from 'ui'
import {useEvents} from '../../hooks'
import {EventList} from '../../molecules'

export const EventsDisplay = () => {
  const {events, loading, more} = useEvents()

  return loading ? <Loader /> : <EventList events={events} onMore={more} />
}
