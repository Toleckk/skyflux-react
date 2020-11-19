import React from 'react'
import {useQuery} from '@apollo/client'
import {useNetwork} from 'react-use'
import {PageLoader} from 'ui'
import {ME} from 'models/user'
import {usePersist} from 'features/shared/hooks'

export const UserSuspense = ({children}) => {
  usePersist(ME)

  const {loading} = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  })

  const {online} = useNetwork()
  if (online && loading) return <PageLoader />

  return children
}
