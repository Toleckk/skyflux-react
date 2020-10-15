import {useQuery} from '@apollo/client'
import {useCallback, useRef} from 'react'
import {useDeepCompareMemo} from 'use-deep-compare'
import {useDeepCompareEffect} from 'react-use'

export const useMyQuery = ({query, ...props}) => {
  const options = useDeepCompareMemo(() => props, [props])

  const {data, fetchMore, subscribeToMore, ...rest} = useQuery(query, options)

  const isSubscribedRef = useRef(false)
  useDeepCompareEffect(() => {
    if (options.subscriptions && !isSubscribedRef.current) {
      const unsubs = options.subscriptions.map(({updateQuery, ...sub}) =>
        subscribeToMore({
          ...sub,
          updateQuery: (...args) => updateQuery?.(...args, rest),
        }),
      )
      isSubscribedRef.current = true
      return () => {
        isSubscribedRef.current = false
        unsubs.forEach(unsub => unsub())
      }
    }
  }, [isSubscribedRef, options.subscriptions, subscribeToMore, rest])

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

  return {data, fetchMore: handledFetchMore, subscribeToMore, ...rest}
}
