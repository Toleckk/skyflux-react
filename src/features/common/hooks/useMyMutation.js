import {useMutation} from '@apollo/client'
import {useCallback} from 'react'

export const useMyMutation = ({
  mutation,
  refetchQueries,
  variables,
  ...options
}) => {
  const [mutate, ...rest] = useMutation(mutation, options)

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
