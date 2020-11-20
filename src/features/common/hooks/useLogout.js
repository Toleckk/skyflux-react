import {useCallback} from 'react'
import {useApolloClient, useMutation} from '@apollo/client'
import {DELETE_CURRENT_SESSION} from '../graphql'

export const useLogout = () => {
  const client = useApolloClient()

  const onCompleted = useCallback(() => {
    localStorage.removeItem('token')
    client.resetConnection()
    client.cache.reset()
    client.resetPersist()
  }, [client])

  const [deleteCurrentSession, {loading}] = useMutation(
    DELETE_CURRENT_SESSION,
    {onCompleted},
  )

  const logout = useCallback(() => deleteCurrentSession(), [
    deleteCurrentSession,
  ])

  return {logout, loading}
}
