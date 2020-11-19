import {gql} from '@apollo/client'

export const CommentFragment = gql`
  fragment CommentFragment on Comment {
    _id
    text
    createdAt
    user {
      nickname
      avatar
    }
    post {
      user {
        _id
        nickname
      }
    }
  }
`

export const DeletedCommentFragment = gql`
  fragment DeletedCommentFragment on DeletedComment {
    _id
    deleted
    post {
      _id
      commentsCount
    }
  }
`

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $text: String!) {
    createComment(comment: {text: $text, post_id: $postId}) {
      ...CommentFragment
    }
  }
  ${CommentFragment}
`

export const DELETE_COMMENT = gql`
  mutation deleteComment($_id: ID!) {
    deleteComment(_id: $_id) {
      _id
    }
  }
`

export const COMMENT_UPDATED = gql`
  subscription commentUpdated($postId: ID!) {
    commentUpdated(post_id: $postId) {
      ...CommentFragment
      ...DeletedCommentFragment
    }
  }
  ${CommentFragment}
  ${DeletedCommentFragment}
`
