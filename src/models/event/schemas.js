import {gql} from '@apollo/client'
import {SubRequestFragment} from 'models/sub'
import {CommentFragment} from 'models/comment'
import {LikeFragment} from 'models/like'

export const MiniSubEventBodyFragment = gql`
  fragment MiniSubEventBodyFragment on SubEventBody {
    sub {
      ...SubRequestFragment
    }
  }
  ${SubRequestFragment}
`

export const MiniCommentEventBodyFragment = gql`
  fragment MiniCommentEventBodyFragment on CommentEventBody {
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
  ${CommentFragment}
`

export const LikeEventBodyFragment = gql`
  fragment LikeEventBodyFragment on LikeEventBody {
    like {
      ...LikeFragment
      post {
        _id
        text
      }
    }
  }
  ${LikeFragment}
`

export const EventFragment = gql`
  fragment EventFragment on Event {
    _id
    createdAt
    kind
    subj {
      ...LikeEventBodyFragment
      ...MiniCommentEventBodyFragment
      ...MiniSubEventBodyFragment
    }
  }
  ${LikeEventBodyFragment}
  ${MiniSubEventBodyFragment}
  ${MiniCommentEventBodyFragment}
`

export const DeletedEventFragment = gql`
  fragment DeletedEventFragment on DeletedEvent {
    _id
    deleted
  }
`

export const EVENTS = gql`
  query events($first: Int!, $after: ID) {
    events(after: $after, first: $first) {
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

export const EVENT_UPDATED = gql`
  subscription eventUpdated {
    eventUpdated {
      ...EventFragment
      ...DeletedEventFragment
    }
  }
  ${EventFragment}
  ${DeletedEventFragment}
`
