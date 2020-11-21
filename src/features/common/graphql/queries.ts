import {gql} from '@apollo/client'
import {
  EVENT_CONNECTION_FRAGMENT,
  SUB_REQUEST_CONNECTION_FRAGMENT,
} from './fragments'

export const SUB_REQUESTS_COUNT = gql`
  query SubRequestsCount {
    subRequestsCount
  }
`

export const SUB_REQUESTS = gql`
  query SubRequests($first: Int!, $after: ID) {
    subRequests(first: $first, after: $after) {
      ...SubRequestConnectionFragment
    }
  }
  ${SUB_REQUEST_CONNECTION_FRAGMENT}
`

export const EVENTS = gql`
  query Events($first: Int!, $after: ID) {
    events(first: $first, after: $after) {
      ...EventConnectionFragment
    }
  }
  ${EVENT_CONNECTION_FRAGMENT}
`
