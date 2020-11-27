import React from 'react'
import {useQuery} from '@apollo/client'
import {useNetwork} from 'react-use'
import {PageLoader} from '@skyflux/react/ui'
import {ME} from '@skyflux/react/features/shared/graphql'
import {usePersist} from '@skyflux/react/features/shared/hooks'

export const UserSuspense: React.FC = ({children}) => {
  usePersist(ME)

  const {loading} = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  })

  const {online} = useNetwork()
  if (online && loading) return <PageLoader />

  return <>{children}</>
}
