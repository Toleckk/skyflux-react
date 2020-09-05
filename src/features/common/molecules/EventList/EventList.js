import React from 'react'
import {EventConnectionList} from 'models/event'
import {EventCard} from '../EventCard'
import {StyledItem, StyledList} from './styles'

export const EventList = ({events}) => (
  <StyledList>
    {events.map(event => (
      <StyledItem key={event.cursor}>
        <EventCard event={event.node} key={event.cursor} />
      </StyledItem>
    ))}
  </StyledList>
)

EventList.propTypes = {
  events: EventConnectionList.isRequired,
}
