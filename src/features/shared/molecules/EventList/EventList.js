import React from 'react'
import PropTypes from 'prop-types'
import {useInfiniteScroll} from 'utils'
import {EventConnection} from 'models/event'
import {ListItem} from 'ui'
import {EventCard} from '../EventCard'
import {StyledList} from './styles'

export const EventList = ({events, onMore}) => {
  const ref = useInfiniteScroll({
    fetchMore: onMore,
    hasMore: events.pageInfo.hasNextPage,
  })

  return (
    <StyledList ref={ref}>
      {events.edges.map(({cursor, node}) => (
        <ListItem key={cursor}>
          <EventCard publication={node} />
        </ListItem>
      ))}
    </StyledList>
  )
}

EventList.propTypes = {
  events: EventConnection.isRequired,
  onMore: PropTypes.func,
}
