import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {useAsync} from '@react-hook/async'
import {useNetwork} from 'react-use'
import {handleMore} from '@skyflux/react/utils'
import {useLoader} from '@skyflux/react/features/shared/hooks'
import {
  POSTS_UPDATED,
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
  const {data, loading, fetchMore, subscribeToMore, refetch} = useQuery(USER, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      nickname,
      firstPosts: 25,
    },
  })

  const user = data?.user
  const posts = user?.posts

  const id = user?._id

  useEffect(
    () =>
      subscribeToMore({
        document: USER_UPDATED,
        variables: {id},
        updateQuery: ({user}, {subscriptionData: {data}}) => {
          if (
            !!data?.userUpdated.mySub?.accepted !== !!user?.posts.edges.length
          )
            refetch()

          return {
            user: user && {
              ...user,
              ...(data?.userUpdated || {}),
            },
          }
        },
      }),
    [subscribeToMore, nickname, id, refetch],
  )

  useEffect(
    () =>
      subscribeToMore({
        document: POSTS_UPDATED,
        variables: {ownerId: id},
        updateQuery: ({user}, {subscriptionData: {data}}) => ({
          user: user && {
            ...user,
            posts: handleMore(user.posts, data.postsUpdated),
          },
        }),
      }),
    [subscribeToMore, id],
  )

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
