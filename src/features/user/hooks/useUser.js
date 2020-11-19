import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {useAsync} from '@react-hook/async'
import {useNetwork} from 'react-use'
import {handleMore} from 'utils'
import {USER} from 'models/user'
import {POST_UPDATED} from 'models/post'
import {useLoader} from 'features/common/hooks'

export const useUser = nickname => {
  const {data, loading, fetchMore, subscribeToMore} = useQuery(USER, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      nickname,
      firstPosts: 25,
    },
  })

  useEffect(
    () =>
      subscribeToMore({
        document: POST_UPDATED,
        variables: {nickname},
        updateQuery: ({user}, {subscriptionData: {data}}) => ({
          user: handleMore(user, data.postUpdated, 'posts'),
        }),
      }),
    [subscribeToMore, nickname],
  )

  const user = data?.user
  const posts = user?.posts

  const [{status}, more] = useAsync(() =>
    fetchMore({
      variables: {
        afterPost: posts?.pageInfo?.endCursor,
      },
    }),
  )

  const {online} = useNetwork()
  useLoader(loading && online && status !== 'loading' && user)

  return {
    user,
    loading,
    posts,
    more,
  }
}
