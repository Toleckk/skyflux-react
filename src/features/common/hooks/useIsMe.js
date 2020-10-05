import {me} from '../../../models/user'
import {useMyQuery} from './useMyQuery'

export const useIsMe = user => {
  const {data, loading} = useMyQuery(me())

  return (
    !loading && data && data.me && user && data.me.nickname === user.nickname
  )
}
