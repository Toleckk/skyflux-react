import React, {forwardRef} from 'react'
import {EventConnectionList} from 'models/event'
import {EventCard} from '../EventCard'
import {StyledItem, StyledList} from './styles'

export const EventList = forwardRef(({events}, ref) => (
  <StyledList ref={ref}>
    {events.map(event => (
      <StyledItem key={event.cursor}>
        <EventCard event={event.node} key={event.cursor} />
      </StyledItem>
    ))}
  </StyledList>
))

EventList.displayName = 'EventList'

EventList.propTypes = {
  events: EventConnectionList.isRequired,
}
