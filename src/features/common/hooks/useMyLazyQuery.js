import {useLazyQuery} from '@apollo/client'
import {useCallback} from 'react'
import {useDeepCompareMemo} from 'use-deep-compare'

export const useMyLazyQuery = ({query, ...props}) => {
  const options = useDeepCompareMemo(() => props, [props])

  const [execute, ...rest] = useLazyQuery(query, options)

  const executeQuery = useCallback(
    queryVariables =>
      execute({
        variables: {...(options.variables || {}), ...queryVariables},
      }),
    [execute, options.variables],
  )

  return [executeQuery, ...rest]
}
