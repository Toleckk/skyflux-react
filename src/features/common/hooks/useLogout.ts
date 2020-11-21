import {useCallback} from 'react'
import {MutationFunction, useApolloClient, useMutation} from '@apollo/client'
import {DELETE_CURRENT_SESSION, DeleteCurrentSession} from '../graphql'

export type UseLogoutResult = {
  logout: () => ReturnType<MutationFunction<DeleteCurrentSession, never>>
  loading: boolean
}

export const useLogout = (): UseLogoutResult => {
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
