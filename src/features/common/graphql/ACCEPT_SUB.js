import {gql} from '@apollo/client'

export const ACCEPT_SUB = gql`
  mutation AcceptSub($_id: ID!) {
    acceptSub(_id: $_id) {
      _id
      accepted
    }
  }
`
