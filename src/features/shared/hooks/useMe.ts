import {useCallback} from 'react'
import {useQuery} from '@apollo/client'
import {ME, Me_me} from '../graphql'

export type UseMeResult = {
  me?: Me_me | null
  isMe: IsMe
}

export type IsMe = (
  userOrNickname: null | undefined | {_id: string} | string,
) => boolean

export const useMe = (): UseMeResult => {
  const {data} = useQuery(ME)

  const me = data?.me

  const isMe = useCallback<IsMe>(
    userOrNickname =>
      !userOrNickname && !me
        ? true
        : !userOrNickname || !me
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
