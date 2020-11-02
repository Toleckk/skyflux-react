import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {EventConnectionList} from 'models/event'
import {EventCard} from '../EventCard'
import {StyledPublicationList} from './styles'

export const EventList = forwardRef(({events, loading}, ref) => (
  <StyledPublicationList
    publications={events}
    Card={EventCard}
    ref={ref}
    loading={loading}
  />
))

EventList.displayName = 'EventList'

EventList.propTypes = {
  events: EventConnectionList.isRequired,
  loading: PropTypes.bool.isRequired,
}
