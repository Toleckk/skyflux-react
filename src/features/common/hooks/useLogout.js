import {useCallback} from 'react'
import {useApolloClient, useMutation} from '@apollo/client'
import {DELETE_CURRENT_SESSION} from 'models/session'

export const useLogout = () => {
  const client = useApolloClient()

  const onCompleted = useCallback(() => {
    localStorage.removeItem('token')
    client.resetConnection()
    client.cache.reset()
    client.resetPersist()
  }, [client])

  const [logout, {loading}] = useMutation(DELETE_CURRENT_SESSION, {onCompleted})

  return {logout, loading}
}
