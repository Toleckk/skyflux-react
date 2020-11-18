import React from 'react'
import {Loader} from 'ui'
import {subRequests} from 'models/sub'
import {useMyQuery} from '../../hooks'
import {SubRequestList} from '../../molecules'

export const SubRequestsDisplay = () => {
  const {data, loading, fetchMore} = useMyQuery({
    ...subRequests({first: 25}),
    fetchPolicy: 'network-only',
  })

  return loading || !data?.subRequests ? (
    <Loader />
  ) : (
    <SubRequestList subs={data.subRequests} onMore={fetchMore} />
  )
}
