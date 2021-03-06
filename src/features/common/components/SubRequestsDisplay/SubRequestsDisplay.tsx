import React from 'react'
import {Loader} from '@skyflux/react/ui'
import {SubRequestList} from '../../components'
import {useSubRequests} from '../../hooks'

export const SubRequestsDisplay: React.FC = () => {
  const {requests, more, loading} = useSubRequests()

  return loading || !requests ? (
    <Loader />
  ) : (
    <SubRequestList subs={requests} onMore={more} />
  )
}
