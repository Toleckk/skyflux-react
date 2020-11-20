import {gql} from '@apollo/client'

export const UserBadgeFragment = gql`
  fragment UserBadgeFragment on User {
    _id
    nickname
    avatar
  }
`

export const CommentFragment = gql`
  fragment CommentFragment on Comment {
    _id
    text
    createdAt
    user {
      ...UserBadgeFragment
    }
  }
  ${UserBadgeFragment}
`

export const CommentConnectionFragment = gql`
  fragment CommentConnectionFramgnet on CommentConnection {
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
  ${CommentFragment}
`

export const PostBadgeFragment = gql`
  fragment PostBadgeFragment on Post {
    _id
    text
  }
`

export const CommentWithPostFragment = gql`
  fragment CommentWithPostFragment on Comment {
    ...CommentFragment
    post {
      ...PostBadgeFragment
      user {
        ...UserBadgeFragment
      }
    }
  }
  ${CommentFragment}
  ${PostBadgeFragment}
  ${UserBadgeFragment}
`

export const PostFragment = gql`
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
  ${UserBadgeFragment}
`

export const PostConnectionFragment = gql`
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
  ${PostFragment}
`

export const UserBadgeConnectionFragment = gql`
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
  ${UserBadgeFragment}
`
