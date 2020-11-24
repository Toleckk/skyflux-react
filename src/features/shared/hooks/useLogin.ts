import {useCallback} from 'react'
import {
  ApolloError,
  MutationFunction,
  useApolloClient,
  useMutation,
} from '@apollo/client'
import {CREATE_SESSION, CreateSession, CreateSessionVariables} from '../graphql'

export type UseLoginResult = {
  login: MutationFunction<CreateSession, CreateSessionVariables>
  loading: boolean
  error?: ApolloError
}

export const useLogin = (): UseLoginResult => {
  const client = useApolloClient()
  const onCompleted = useCallback(
    data => {
      if (!data) return
      localStorage.setItem('token', data.createSession || null)
      client.resetConnection()
      client.cache.reset()
      client.resetPersist()
    },
    [client],
  )

  const [login, {loading, error}] = useMutation(CREATE_SESSION, {
    onCompleted,
  })

  return {login, loading, error}
}
