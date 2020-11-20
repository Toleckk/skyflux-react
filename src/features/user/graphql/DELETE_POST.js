import {gql} from '@apollo/client'

export const DELETE_POST = gql`
  mutation DeletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`
