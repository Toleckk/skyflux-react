import {gql} from '@apollo/client'
import {SubRequestFragment} from 'models/sub'
import {CommentFragment} from 'models/comment'
import {LikeFragment} from 'models/like'

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
          user {
            _id
            nickname
          }
        }
      }
    }
  }
  ${CommentFragment}
`

export const LikeEventFragment = gql`
  fragment LikeEventFragment on LikeEvent {
    kind
    createdAt
    subj {
      like {
        ...LikeFragment
        post {
          _id
          text
        }
      }
    }
  }
  ${LikeFragment}
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
          ...LikeEventFragment
          ...MiniCommentEventFragment
          ...MiniSubEventFragment
        }
      }
    }
  }
  ${LikeEventFragment}
  ${MiniSubEventFragment}
  ${MiniCommentEventFragment}
`

export const EVENT_ADDED = gql`
  subscription eventAdded {
    eventAdded {
      ...LikeEventFragment
      ...MiniCommentEventFragment
      ...MiniSubEventFragment
    }
  }
  ${LikeEventFragment}
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
