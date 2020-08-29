import React from 'react'
import PropTypes from 'prop-types'
import {EventCard} from '../EventCard'
import {StyledItem, StyledList} from './styles'

export const EventList = ({events}) => (
  <StyledList>
    {events.map(event => (
      <StyledItem key={event._id}>
        <EventCard event={event} key={event._id} />
      </StyledItem>
    ))}
  </StyledList>
)

EventList.propTypes = {
  events: PropTypes.arrayOf(EventCard.propTypes.event).isRequired,
}
