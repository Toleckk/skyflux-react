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
  query getEvents {
    getEvents {
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
