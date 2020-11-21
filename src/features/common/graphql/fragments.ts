import {gql} from '@apollo/client'
import {
  COMMENT_WITH_POST_FRAGMENT,
  POST_BADGE_FRAGMENT,
  USER_BADGE_FRAGMENT,
} from 'features/shared/graphql'

export const SUB_REQUEST_FRAGMENT = gql`
  fragment SubRequestFragment on Sub {
    _id
    accepted
    from {
      ...UserBadgeFragment
    }
  }
  ${USER_BADGE_FRAGMENT}
`

export const DELETED_SUB_REQUEST_FRAGMENT = gql`
  fragment DeletedSubRequestFragment on DeletedSub {
    _id
    deleted
  }
`

export const MAYBE_SUB_REQUEST_FRAGMENT = gql`
  fragment MaybeSubRequestFragment on MaybeSub {
    ...SubRequestFragment
    ...DeletedSubRequestFragment
  }
  ${SUB_REQUEST_FRAGMENT}
  ${DELETED_SUB_REQUEST_FRAGMENT}
`

export const SUB_REQUEST_CONNECTION_FRAGMENT = gql`
  fragment SubRequestConnectionFragment on SubConnection {
    edges {
      cursor
      node {
        ...SubRequestFragment
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  ${SUB_REQUEST_FRAGMENT}
`

export const LIKE_BADGE_FRAGMENT = gql`
  fragment LikeBadgeFragment on Like {
    _id
    user {
      ...UserBadgeFragment
    }
  }
  ${USER_BADGE_FRAGMENT}
`

export const SUB_EVENT_BODY_FRAGMENT = gql`
  fragment SubEventBodyFragment on SubEventBody {
    sub {
      ...SubRequestFragment
    }
  }
  ${SUB_REQUEST_FRAGMENT}
`

export const COMMENT_EVENT_BODY_FRAGMENT = gql`
  fragment CommentEventBodyFragment on CommentEventBody {
    comment {
      ...CommentWithPostFragment
    }
  }
  ${COMMENT_WITH_POST_FRAGMENT}
`

export const LIKE_EVENT_BODY_FRAGMENT = gql`
  fragment LikeEventBodyFragment on LikeEventBody {
    like {
      ...LikeBadgeFragment
      post {
        ...PostBadgeFragment
      }
    }
  }
  ${LIKE_BADGE_FRAGMENT}
  ${POST_BADGE_FRAGMENT}
`

export const EVENT_FRAGMENT = gql`
  fragment EventFragment on Event {
    _id
    createdAt
    kind
    subj {
      ...LikeEventBodyFragment
      ...CommentEventBodyFragment
      ...SubEventBodyFragment
    }
  }
  ${LIKE_EVENT_BODY_FRAGMENT}
  ${SUB_EVENT_BODY_FRAGMENT}
  ${COMMENT_EVENT_BODY_FRAGMENT}
`

export const EVENT_CONNECTION_FRAGMENT = gql`
  fragment EventConnectionFragment on EventConnection {
    edges {
      cursor
      node {
        ...EventFragment
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  ${EVENT_FRAGMENT}
`

export const DELETED_EVENT_FRAGMENT = gql`
  fragment DeletedEventFragment on DeletedEvent {
    _id
    deleted
  }
`

export const MAYBE_EVENT_FRAGMENT = gql`
  fragment MaybeEventFragment on MaybeEvent {
    ...EventFragment
    ...DeletedEventFragment
  }
  ${EVENT_FRAGMENT}
  ${DELETED_EVENT_FRAGMENT}
`
