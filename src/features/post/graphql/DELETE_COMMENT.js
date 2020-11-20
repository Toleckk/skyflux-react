import {gql} from '@apollo/client'

export const DELETE_COMMENT = gql`
  mutation DeleteComment($_id: ID!) {
    deleteComment(_id: $_id) {
      _id
    }
  }
`
