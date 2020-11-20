import {gql} from '@apollo/client'

export const DECLINE_SUB = gql`
  mutation DeclineSub($_id: ID!) {
    declineSub(_id: $_id) {
      _id
    }
  }
`
