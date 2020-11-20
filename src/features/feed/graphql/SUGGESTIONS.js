import {gql} from '@apollo/client'
import {UserBadgeFragment} from 'features/shared/graphql'

export const SUGGESTIONS = gql`
  query Suggestions {
    suggestions(first: 4) {
      edges {
        cursor
        node {
          ...UserBadgeFragment
        }
      }
    }
  }
  ${UserBadgeFragment}
`
