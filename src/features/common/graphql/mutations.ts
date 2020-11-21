import {gql} from '@apollo/client'

export const ACCEPT_SUB = gql`
  mutation AcceptSub($_id: ID!) {
    acceptSub(_id: $_id) {
      _id
      accepted
    }
  }
`

export const DECLINE_SUB = gql`
  mutation DeclineSub($_id: ID!) {
    declineSub(_id: $_id) {
      _id
    }
  }
`

export const DELETE_CURRENT_SESSION = gql`
  mutation DeleteCurrentSession {
    deleteCurrentSession
  }
`
