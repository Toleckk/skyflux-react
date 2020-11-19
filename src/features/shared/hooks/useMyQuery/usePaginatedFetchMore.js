import {useCallback} from 'react'

export const usePaginatedFetchMore = ({query, data, fetchMore, variables}) => {
  const name = query.definitions.find(
    ({kind}) => kind === 'OperationDefinition',
  )?.name?.value

  const after = data?.[name]?.pageInfo?.endCursor
  const hasNextPage = data?.[name]?.pageInfo?.hasNextPage || false

  return useCallback(
    () =>
      name &&
      hasNextPage &&
      fetchMore({
        variables: {...variables, after},
      }),
    [after, fetchMore, hasNextPage, name, variables],
  )
}
