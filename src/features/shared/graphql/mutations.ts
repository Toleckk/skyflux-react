import {gql} from '@apollo/client'

export const CREATE_LIKE = gql`
  mutation CreateLike($postId: ID!) {
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

export const CREATE_POST = gql`
  mutation CreatePost($text: String!) {
    createPost(post: {text: $text}) {
      _id
    }
  }
`

export const DELETE_LIKE = gql`
  mutation DeleteLike($postId: ID!) {
    deleteLike(post_id: $postId) {
      _id
      deleted
      post {
        _id
        likesCount
        isLikedByMe
      }
    }
  }
`
