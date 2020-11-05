import {gql} from '@apollo/client'

export const LikeFragment = gql`
  fragment LikeFragment on Like {
    _id
    user {
      _id
      avatar
      nickname
    }
  }
`

export const CREATE_LIKE = gql`
  mutation createLike($postId: ID!) {
    createLike(post_id: $postId) {
      _id
    }
  }
`

export const DELETE_LIKE = gql`
  mutation deleteLike($postId: ID!) {
    deleteLike(post_id: $postId)
  }
`

export const LIKE_CREATED = gql`
  subscription likeCreated($postId: ID!) {
    likeCreated(post_id: $postId) {
      _id
      post {
        _id
        isLikedByMe
        likesCount
      }
    }
  }
`

export const LIKE_DELETED = gql`
  subscription likeDeleted($postId: ID!) {
    likeDeleted(post_id: $postId) {
      _id
      post {
        _id
        isLikedByMe
        likesCount
      }
    }
  }
`
