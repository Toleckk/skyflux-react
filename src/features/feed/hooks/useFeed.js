import {useAsync} from '@react-hook/async'
import {useQuery} from '@apollo/client'
import {GET_FEED} from 'models/post'
import {useLoader, usePersist} from 'features/common/hooks'

export const useFeed = () => {
  usePersist(GET_FEED)

  const {data, fetchMore, loading} = useQuery(GET_FEED, {
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
        after: data?.getFeed?.pageInfo.endCursor,
      },
    }),
  )

  const isInitialLoading = loading && status !== 'loading' && !data?.getFeed

  useLoader(loading && status !== 'loading' && !!data?.getFeed)

  return {
    posts: data?.getFeed,
    loading: isInitialLoading,
    more,
  }
}
