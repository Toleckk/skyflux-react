import {useQuery} from '@apollo/client'
import {ME} from 'models/user'
import {useCallback} from 'react'

export const useMe = () => {
  const {data} = useQuery(ME)

  const me = data?.me

  const isMe = useCallback(
    userOrNickname =>
      !userOrNickname && !me
        ? true
        : (!userOrNickname && me) || (!me && userOrNickname)
        ? false
        : typeof userOrNickname === 'string'
        ? userOrNickname === me.nickname
        : typeof userOrNickname === 'object' &&
          '_id' in userOrNickname &&
          me._id === userOrNickname._id,
    [me],
  )

  return {me, isMe}
}
