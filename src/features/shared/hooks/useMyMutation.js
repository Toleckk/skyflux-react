import {useCallback, useMemo, useRef} from 'react'
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
  const [mutate, result] = useMutation(mutation, {
    ...options,
    onCompleted: completeCallback,
  })

  onCompletedRef.current = useCallback(
    (...args) => onCompleted(...args, result),
    [onCompleted, result],
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

  const mutateIgnoringErrors = useCallback(
    (...args) => mutateVars(...args).catch(noop),
    [mutateVars],
  )

  const formattedResult = useMemo(
    () => ({
      ...result,
      error: result.error?.graphQLErrors
        ?.map?.(e => e.extensions)
        ?.reduce(
          (acc, {exception}) => ({
            ...acc,
            ...exception,
          }),
          {},
        ),
    }),
    [result],
  )

  return [mutateIgnoringErrors, formattedResult]
}
