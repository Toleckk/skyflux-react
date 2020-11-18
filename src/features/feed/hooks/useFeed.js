import {useAsync} from '@react-hook/async'
import {useQuery} from '@apollo/client'
import {FEED} from 'models/post'
import {useLoader, usePersist} from 'features/common/hooks'

export const useFeed = () => {
  usePersist(FEED)

  const {data, fetchMore, loading} = useQuery(FEED, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      first: 25,
    },
  })

  const [{status}, more] = useAsync(() =>
    fetchMore({
      variables: {
        after: data?.feed?.pageInfo.endCursor,
      },
    }),
  )

  const isInitialLoading = loading && status !== 'loading' && !data?.feed

  useLoader(loading && status !== 'loading' && !!data?.feed)

  return {
    posts: data?.feed,
    loading: isInitialLoading,
    more,
  }
}
