import {useApolloClient} from '@apollo/client'
import {useAuth} from 'reactfire'
import {useFirebaseMutation} from '@skyflux/react/utils'

export type UseLogoutResult = {
  logout: () => Promise<void>
  loading: boolean
}

export const useLogout = (): UseLogoutResult => {
  const client = useApolloClient()

  const auth = useAuth()

  const {execute, loading} = useFirebaseMutation(() =>
    auth.signOut().then(() => {
      client.resetConnection()
      client.cache.reset()
      client.resetPersist()
    }),
  )

  return {logout: execute, loading}
}
