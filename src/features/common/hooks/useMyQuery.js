import {useQuery} from '@apollo/client'
import {useCallback} from 'react'
import {useDeepCompareMemo} from 'use-deep-compare'

export const useMyQuery = ({query, ...props}) => {
  const options = useDeepCompareMemo(() => props, [props])

  const {data, fetchMore, ...rest} = useQuery(query, options)

  const name = query.definitions.find(
    ({kind}) => kind === 'OperationDefinition',
  )?.name?.value

  const handledFetchMore = useCallback(
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
        variables: {...options.variables, after: data[name].pageInfo.endCursor},
      }),
    [data, fetchMore, name, options.variables],
  )

  return {data, fetchMore: handledFetchMore, ...rest}
}
