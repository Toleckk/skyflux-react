import {gql} from '@apollo/client'
import {
  POST_CONNECTION_FRAGMENT,
  USER_BADGE_FRAGMENT,
} from 'features/shared/graphql'

export const FEED = gql`
  query Feed($first: Int!, $after: ID) {
    feed(first: $first, after: $after) {
      ...PostConnectionFragment
    }
  }
  ${POST_CONNECTION_FRAGMENT}
`

export const SUGGESTIONS = gql`
  query Suggestions {
    suggestions(first: 4) {
      edges {
        cursor
        node {
          ...UserBadgeFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${USER_BADGE_FRAGMENT}
`
