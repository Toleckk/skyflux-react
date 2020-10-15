import {gql} from '@apollo/client'
import {SubRequestFragment} from 'models/sub'
import {CommentFragment} from 'models/comment'

export const MiniSubEventFragment = gql`
  fragment MiniSubEventFragment on SubEvent {
    kind
    createdAt
    subj {
      sub {
        ...SubRequestFragment
      }
    }
  }
  ${SubRequestFragment}
`

export const MiniCommentEventFragment = gql`
  fragment MiniCommentEventFragment on CommentEvent {
    kind
    createdAt
    subj {
      comment {
        ...CommentFragment
        post {
          _id
          text
        }
      }
    }
  }
  ${CommentFragment}
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
          ...MiniCommentEventFragment
          ...MiniSubEventFragment
        }
      }
    }
  }
  ${MiniSubEventFragment}
  ${MiniCommentEventFragment}
`

export const EVENT_ADDED = gql`
  subscription eventAdded {
    eventAdded {
      ...MiniCommentEventFragment
      ...MiniSubEventFragment
    }
  }
  ${MiniCommentEventFragment}
  ${MiniSubEventFragment}
`

export const EVENT_DELETED = gql`
  subscription eventDeleted {
    eventDeleted {
      _id
    }
  }
`
