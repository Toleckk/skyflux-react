import {gql} from '@apollo/client'
import {PostConnectionFragment} from 'features/shared/graphql'
import {UserFragment} from './fragments'

export const USER = gql`
  query User($nickname: String!, $firstPosts: Int!, $afterPost: ID) {
    user(nickname: $nickname) {
      ...UserFragment
      posts(first: $firstPosts, after: $afterPost) {
        ...PostConnectionFragment
      }
    }
  }
  ${UserFragment}
  ${PostConnectionFragment}
`
