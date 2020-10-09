import React, {forwardRef} from 'react'
import {EventConnectionList} from 'models/event'
import {PublicationList} from '../PublicationList'
import {EventCard} from '../EventCard'

export const EventList = forwardRef(({events}, ref) => (
  <PublicationList publications={events} Card={EventCard} ref={ref} />
))

EventList.displayName = 'EventList'

EventList.propTypes = {
  events: EventConnectionList.isRequired,
}
