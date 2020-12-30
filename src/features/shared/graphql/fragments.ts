import {gql} from '@apollo/client'

export const USER_BADGE_FRAGMENT = gql`
  fragment UserBadgeFragment on User {
    _id
    nickname
    avatar
  }
`

export const COMMENT_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    _id
    text
    createdAt
    post {
      user {
        _id
      }
    }
    user {
      ...UserBadgeFragment
    }
  }
  ${USER_BADGE_FRAGMENT}
`

export const COMMENT_CONNECTION_FRAGMENT = gql`
  fragment CommentConnectionFragment on CommentConnection {
    edges {
      cursor
      node {
        ...CommentFragment
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  ${COMMENT_FRAGMENT}
`

export const POST_BADGE_FRAGMENT = gql`
  fragment PostBadgeFragment on Post {
    _id
    text
  }
`

export const COMMENT_WITH_POST_FRAGMENT = gql`
  fragment CommentWithPostFragment on Comment {
    ...CommentFragment
    post {
      ...PostBadgeFragment
      user {
        ...UserBadgeFragment
      }
    }
  }
  ${COMMENT_FRAGMENT}
  ${POST_BADGE_FRAGMENT}
  ${USER_BADGE_FRAGMENT}
`

export const POST_FRAGMENT = gql`
  fragment PostFragment on Post {
    _id
    text
    createdAt
    likesCount
    commentsCount
    isLikedByMe
    user {
      ...UserBadgeFragment
    }
  }
  ${USER_BADGE_FRAGMENT}
`

export const POST_CONNECTION_FRAGMENT = gql`
  fragment PostConnectionFragment on PostConnection {
    edges {
      cursor
      node {
        ...PostFragment
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  ${POST_FRAGMENT}
`

export const USER_BADGE_CONNECTION_FRAGMENT = gql`
  fragment UserBadgeConnectionFragment on UserConnection {
    edges {
      cursor
      node {
        ...UserBadgeFragment
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  ${USER_BADGE_FRAGMENT}
`
