import {useCallback, useRef} from 'react'
import {useMutation} from '@apollo/client'
import noop from 'noop6'
import {useDeepCompareMemo} from 'use-deep-compare'

export const useMyMutation = ({mutation, ...props}) => {
  const options = useDeepCompareMemo(() => props, [props])

  const {refetchQueries, variables, onCompleted = noop} = options

  const onCompletedRef = useRef(noop)
  const completeCallback = useCallback(
    (...args) => onCompletedRef.current(...args),
    [onCompletedRef],
  )
  const [mutate, ...rest] = useMutation(mutation, {
    ...options,
    onCompleted: completeCallback,
  })

  onCompletedRef.current = useCallback(
    (...args) => onCompleted(...args, ...rest),
    [onCompleted, rest],
  )

  const refetch = useCallback(
    (mutateVariables = {}) => data => {
      if (Array.isArray(refetchQueries)) return refetchQueries

      if (typeof refetchQueries === 'function')
        return refetchQueries(data, {...variables, ...mutateVariables})

      return []
    },
    [refetchQueries, variables],
  )

  const mutateVars = useCallback(
    (mutateVariables = {}) =>
      mutate({
        variables: {...variables, ...mutateVariables},
        refetchQueries: refetch(mutateVariables),
      }),
    [mutate, refetch, variables],
  )

  return [mutateVars, ...rest]
}
