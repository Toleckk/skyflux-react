import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {useAsync} from '@react-hook/async'
import {useNetwork} from 'react-use'
import {handleMore} from 'utils'
import {useLoader} from 'features/shared/hooks'
import {
  POST_UPDATED,
  USER,
  USER_UPDATED,
  User_user,
  User_user_posts,
} from '../graphql'

export type UseUserResult = {
  user?: User_user | null
  loading: boolean
  more: () => void
  posts?: User_user_posts
}

export const useUser = (nickname: string): UseUserResult => {
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
        document: USER_UPDATED,
        variables: {nickname},
        updateQuery: ({user}, {subscriptionData: {data}}) => ({
          user: user && {
            ...user,
            ...(data?.userUpdated || {}),
          },
        }),
      }),
    [subscribeToMore, nickname],
  )

  useEffect(
    () =>
      subscribeToMore({
        document: POST_UPDATED,
        variables: {nickname},
        updateQuery: ({user}, {subscriptionData: {data}}) => ({
          user: user && {
            ...user,
            posts: handleMore(user.posts, data.postUpdated),
          },
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
  useLoader(loading && online && status !== 'loading' && !!user)

  return {
    user,
    loading,
    posts,
    more,
  }
}
