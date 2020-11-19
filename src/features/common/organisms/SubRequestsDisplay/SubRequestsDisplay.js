import React from 'react'
import {Loader} from 'ui'
import {useSubRequests} from '../../hooks'
import {SubRequestList} from '../../molecules'

export const SubRequestsDisplay = () => {
  const {requests, more, loading} = useSubRequests()

  return loading || !requests ? (
    <Loader />
  ) : (
    <SubRequestList subs={requests} onMore={more} />
  )
}
