import {useApolloClient} from '@apollo/client'
import {useAuth} from 'reactfire'
import {useAsync} from '@react-hook/async'

export type UseLogoutResult = {
  logout: () => Promise<void>
  loading: boolean
}

export const useLogout = (): UseLogoutResult => {
  const client = useApolloClient()

  const auth = useAuth()

  const [{status}, logout] = useAsync(() =>
    auth.signOut().then(() => {
      client.resetConnection()
      client.cache.reset()
      client.resetPersist()
    }),
  )

  return {logout, loading: status === 'loading'}
}
