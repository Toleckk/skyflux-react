import {gql} from '@apollo/client'
import {
  POST_CONNECTION_FRAGMENT,
  USER_BADGE_CONNECTION_FRAGMENT,
} from 'features/shared/graphql'

export const POSTS = gql`
  query Posts($query: String!, $first: Int!, $after: ID) {
    posts(query: $query, after: $after, first: $first) {
      ...PostConnectionFragment
    }
  }
  ${POST_CONNECTION_FRAGMENT}
`

export const USERS = gql`
  query Users($query: String!, $after: ID, $first: Int!) {
    users(query: $query, after: $after, first: $first) {
      ...UserBadgeConnectionFragment
    }
  }
  ${USER_BADGE_CONNECTION_FRAGMENT}
`
