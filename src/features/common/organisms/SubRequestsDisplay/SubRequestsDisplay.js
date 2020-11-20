import React from 'react'
import {Loader} from 'ui'
import {SubRequestList} from '../../molecules'
import {useSubRequests} from '../../hooks'

export const SubRequestsDisplay = () => {
  const {requests, more, loading} = useSubRequests()

  return loading || !requests ? (
    <Loader />
  ) : (
    <SubRequestList subs={requests} onMore={more} />
  )
}
