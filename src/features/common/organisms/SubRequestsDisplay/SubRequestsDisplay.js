import React from 'react'
import {useInfiniteScroll} from 'utils'
import {Loader} from 'ui'
import {getSubRequests} from 'models/sub'
import {useMyQuery} from '../../hooks'
import {SubRequestList} from '../../molecules'

export const SubRequestsDisplay = () => {
  const {data, loading, fetchMore} = useMyQuery({
    ...getSubRequests({first: 25}),
    fetchPolicy: 'network-only',
  })
  const subs = data?.getSubRequests?.edges

  const hasMore = data?.getSubRequests?.pageInfo?.hasNextPage

  const ref = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore,
    threshold: '100px',
  })

  return loading ? (
    <Loader />
  ) : (
    <SubRequestList subs={subs} ref={ref} loading={hasMore} />
  )
}
