import React from 'react'
import {Loader} from 'ui'
import {EventList} from 'features/shared/molecules'
import {useEvents} from '../../hooks'

export const EventsDisplay = () => {
  const {events, loading, more} = useEvents()

  return loading ? <Loader /> : <EventList events={events} onMore={more} />
}
