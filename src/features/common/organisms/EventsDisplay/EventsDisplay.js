import React from 'react'
import {getEvents} from 'models/event'
import {Loader} from 'ui'
import {useMyQuery} from '../../hooks'
import {EventList} from '../../molecules'

export const EventsDisplay = () => {
  const {data, loading} = useMyQuery(getEvents({first: 25}))

  if (loading) return <Loader />

  const edges = data?.getEvents?.edges

  if (!edges) return <></>

  return <EventList events={edges} />
}
