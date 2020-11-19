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
      post {
        _id
        likesCount
        isLikedByMe
      }
    }
  }
`

export const DELETE_LIKE = gql`
  mutation deleteLike($postId: ID!) {
    deleteLike(post_id: $postId) {
      post {
        _id
        likesCount
        isLikedByMe
      }
    }
  }
`

export const LIKE_UPDATED = gql`
  subscription likeUpdated($postId: ID!) {
    likeUpdated(post_id: $postId) {
      ... on Like {
        _id
        post {
          likesCount
          isLikedByMe
        }
      }
      ... on DeletedLike {
        _id
        deleted
        post {
          likesCount
          isLikedByMe
        }
      }
    }
  }
`
