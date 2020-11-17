import React from 'react'
import {Loader} from 'ui'
import {getSubRequests} from 'models/sub'
import {useMyQuery} from '../../hooks'
import {SubRequestList} from '../../molecules'

export const SubRequestsDisplay = () => {
  const {data, loading, fetchMore} = useMyQuery({
    ...getSubRequests({first: 25}),
    fetchPolicy: 'network-only',
  })

  return loading || !data?.getSubRequests ? (
    <Loader />
  ) : (
    <SubRequestList subs={data.getSubRequests} onMore={fetchMore} />
  )
}
