import {gql} from '@apollo/client'
import {SubRequestConnectionFragment} from './fragments'

export const SUB_REQUESTS = gql`
  query SubRequests($first: Int!, $after: ID) {
    subRequests(first: $first, after: $after) {
      ...SubRequestConnectionFragment
    }
  }
  ${SubRequestConnectionFragment}
`
