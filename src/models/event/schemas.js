import {gql} from '@apollo/client'

export const EventFragment = gql`
  fragment EventFragment on Event {
    _id
    user {
      _id
      nickname
      avatar
    }
  }
`

export const GET_EVENTS = gql`
  query getEvents($first: Int, $after: ID) {
    getEvents(after: $after, first: $first) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...EventFragment
        }
      }
    }
  }
  ${EventFragment}
`
