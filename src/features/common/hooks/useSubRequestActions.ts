import {useCallback} from 'react'
import {FetchResult, useMutation} from '@apollo/client'
import {ACCEPT_SUB, AcceptSub, DECLINE_SUB, DeclineSub} from '../graphql'

export type UseSubRequestActionsResult = {
  acceptSub: () => Promise<FetchResult<AcceptSub>>
  declineSub: () => Promise<FetchResult<DeclineSub>>
}

export const useSubRequestActions = (
  _id: string,
): UseSubRequestActionsResult => {
  const [accept] = useMutation(ACCEPT_SUB, {variables: {_id}})
  const [decline] = useMutation(DECLINE_SUB, {variables: {_id}})

  const acceptSub = useCallback(() => accept(), [accept])

  const declineSub = useCallback(() => decline(), [decline])

  return {acceptSub, declineSub}
}
