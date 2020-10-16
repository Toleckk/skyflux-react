import {useCallback} from 'react'

export const usePaginatedFetchMore = ({query, data, fetchMore, variables}) => {
  const name = query.definitions.find(
    ({kind}) => kind === 'OperationDefinition',
  )?.name?.value

  return useCallback(
    () =>
      name &&
      data?.[name]?.pageInfo?.hasNextPage &&
      fetchMore({
        updateQuery: (previousResult, {fetchMoreResult}) => {
          const {pageInfo, edges} = fetchMoreResult[name]
          const {__typename} = previousResult[name]
          const previousEdges = previousResult[name].edges

          return edges.length
            ? {
                [name]: {
                  __typename,
                  edges: previousEdges.concat(edges),
                  pageInfo,
                },
              }
            : previousResult
        },
        variables: {...variables, after: data[name].pageInfo.endCursor},
      }),
    [data, fetchMore, name, variables],
  )
}
