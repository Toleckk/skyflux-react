import {gql} from '@apollo/client'
import {
  CommentWithPostFragment,
  PostBadgeFragment,
  UserBadgeFragment,
} from 'features/shared/graphql'

export const SubRequestFragment = gql`
  fragment SubRequestFragment on Sub {
    _id
    accepted
    from {
      ...UserBadgeFragment
    }
  }
  ${UserBadgeFragment}
`

export const DeletedSubRequestFragment = gql`
  fragment DeletedSubRequestFragment on DeletedSub {
    _id
    deleted
  }
`

export const MaybeSubRequestFragment = gql`
  fragment MaybeSubRequestFragment on MaybeSub {
    ...SubRequestFragment
    ...DeletedSubRequestFragment
  }
  ${SubRequestFragment}
  ${DeletedSubRequestFragment}
`

export const SubRequestConnectionFragment = gql`
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
  ${SubRequestFragment}
`

export const LikeBadgeFragment = gql`
  fragment LikeBadgeFragment on Like {
    _id
    user {
      ...UserBadgeFragment
    }
  }
  ${UserBadgeFragment}
`

export const SubEventBodyFragment = gql`
  fragment SubEventBodyFragment on SubEventBody {
    sub {
      ...SubRequestFragment
    }
  }
  ${SubRequestFragment}
`

export const CommentEventBodyFragment = gql`
  fragment CommentEventBodyFragment on CommentEventBody {
    comment {
      ...CommentWithPostFragment
    }
  }
  ${CommentWithPostFragment}
`

export const LikeEventBodyFragment = gql`
  fragment LikeEventBodyFragment on LikeEventBody {
    like {
      ...LikeBadgeFragment
      post {
        ...PostBadgeFragment
      }
    }
  }
  ${LikeBadgeFragment}
  ${PostBadgeFragment}
`

export const EventFragment = gql`
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
  ${LikeEventBodyFragment}
  ${SubEventBodyFragment}
  ${CommentEventBodyFragment}
`

export const EventConnectionFragment = gql`
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
  ${EventFragment}
`

export const DeletedEventFragment = gql`
  fragment DeletedEventFragment on DeletedEvent {
    _id
    deleted
  }
`

export const MaybeEventFragment = gql`
  fragment MaybeEventFragment on MaybeEvent {
    ...EventFragment
    ...DeletedEventFragment
  }
  ${EventFragment}
  ${DeletedEventFragment}
`
