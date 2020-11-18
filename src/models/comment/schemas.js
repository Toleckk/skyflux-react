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

export const COMMENT_CREATED = gql`
  subscription commentCreated($postId: ID!) {
    commentCreated(post_id: $postId) {
      ...CommentFragment
      post {
        _id
        commentsCount
      }
    }
  }
  ${CommentFragment}
`

export const COMMENT_DELETED = gql`
  subscription commentDeleted($postId: ID!) {
    commentDeleted(post_id: $postId) {
      _id
      post {
        _id
        commentsCount
      }
    }
  }
`
