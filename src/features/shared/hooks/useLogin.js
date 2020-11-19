import {useApolloClient, useMutation} from '@apollo/client'
import {CREATE_SESSION} from 'models/session'
import {useCallback} from 'react'

export const useLogin = () => {
  const client = useApolloClient()
  const onCompleted = useCallback(
    ({createSession}) => {
      localStorage.setItem('token', createSession || null)
      client.resetConnection()
      client.cache.reset()
      client.resetPersist()
    },
    [client],
  )

  const [login, {loading, error}] = useMutation(CREATE_SESSION, {onCompleted})

  return {login, loading, error}
}
