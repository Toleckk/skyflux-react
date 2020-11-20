import {gql} from '@apollo/client'
import {UserBadgeConnectionFragment} from 'features/shared/graphql'

export const USERS = gql`
  query Users($query: String!, $after: ID, $first: Int!) {
    users(query: $query, after: $after, first: $first) {
      ...UserBadgeConnectionFragment
    }
  }
  ${UserBadgeConnectionFragment}
`
