import {gql} from '@apollo/client'

export const CREATE_POST = gql`
  mutation CreatePost($text: String!) {
    createPost(post: {text: $text}) {
      _id
    }
  }
`
