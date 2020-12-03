import {useApolloClient} from '@apollo/client'
import {useAuth} from 'reactfire'
import {useAsync} from '@react-hook/async'
import {useState} from 'react'

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

  const [error, setError] = useState<Partial<LoginVariables> | undefined>(
    undefined,
  )

  const client = useApolloClient()

  const [{status}, login] = useAsync(data =>
    auth
      .signInWithEmailAndPassword(data.login, data.password)
      .then(() => {
        client.resetConnection()
        client.cache.reset()
        client.resetPersist()
      })
      .catch(({code, message}) => {
        const field = errorsKeys[code]

        if (field) setError({[field]: message})
      }),
  )

  return {login, loading: status === 'loading', error}
}

const errorsKeys: Record<string, 'password' | 'login'> = {
  'auth/wrong-password': 'password',
  'auth/user-not-found': 'login',
  'auth/invalid-email': 'login',
}
