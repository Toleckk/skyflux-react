import {useApolloClient} from '@apollo/client'
import {useAuth} from 'reactfire'
import {useFirebaseMutation} from '@skyflux/react/utils'

export type LoginVariables = {
  login: string
  password: string
}

export type UseLoginResult = {
  login: (credentials: LoginVariables) => Promise<void>
  loading: boolean
  error?: Partial<LoginVariables>
}

export const useLogin = (): UseLoginResult => {
  const auth = useAuth()

  const client = useApolloClient()

  const {execute: login, loading, firebaseError: error} = useFirebaseMutation(
    data =>
      auth.signInWithEmailAndPassword(data.login, data.password).then(() => {
        client.resetConnection()
        client.cache.reset()
        client.resetPersist()
      }),
    {
      'auth/wrong-password': 'password',
      'auth/user-not-found': 'login',
      'auth/invalid-email': 'login',
    },
  )

  return {login, loading, error}
}
