import {useCallback} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_SUB, DELETE_SUB} from '../graphql'
import {User_user} from '../graphql/types/User'

export type UseToggleSubscribeResult = {
  toggle: () => void
  loading: boolean
}

export const useToggleSubscribe = (
  user: User_user,
): UseToggleSubscribeResult => {
  const variables = {nickname: user.nickname}

  const [subscribe, subState] = useMutation(CREATE_SUB, {variables})
  const [unsubscribe, unsubState] = useMutation(DELETE_SUB, {variables})

  const isSubscribeByMe = !!user.mySub

  const toggle = useCallback(
    () => (isSubscribeByMe ? unsubscribe() : subscribe()),
    [isSubscribeByMe, unsubscribe, subscribe],
  )

  return {toggle, loading: subState.loading || unsubState.loading}
}
