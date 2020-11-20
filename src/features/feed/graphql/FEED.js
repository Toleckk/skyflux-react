import {gql} from '@apollo/client'
import {PostConnectionFragment} from 'features/shared/graphql'

export const FEED = gql`
  query Feed($first: Int!, $after: ID) {
    feed(first: $first, after: $after) {
      ...PostConnectionFragment
    }
  }
  ${PostConnectionFragment}
`
