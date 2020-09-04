import {useMutation} from '@apollo/client'
import {useCallback} from 'react'

export const useMyMutation = ({mutation, ...options}) => {
  const [mutate, ...rest] = useMutation(mutation, options)

  const mutateVars = useCallback(variables => mutate({variables}), [mutate])

  return [mutateVars, ...rest]
}
