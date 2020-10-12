import React, {forwardRef} from 'react'
import {EventConnectionList} from 'models/event'
import {EventCard} from '../EventCard'
import {StyledPublicationList} from './styles'

export const EventList = forwardRef(({events}, ref) => (
  <StyledPublicationList publications={events} Card={EventCard} ref={ref} />
))

EventList.displayName = 'EventList'

EventList.propTypes = {
  events: EventConnectionList.isRequired,
}
