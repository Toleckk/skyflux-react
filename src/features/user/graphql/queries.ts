import {gql} from '@apollo/client'
import {POST_CONNECTION_FRAGMENT} from 'features/shared/graphql'
import {USER_FRAGMENT} from './fragments'

export const USER = gql`
  query User($nickname: String!, $firstPosts: Int!, $afterPost: ID) {
    user(nickname: $nickname) {
      ...UserFragment
      posts(first: $firstPosts, after: $afterPost) {
        ...PostConnectionFragment
      }
    }
  }
  ${USER_FRAGMENT}
  ${POST_CONNECTION_FRAGMENT}
`
