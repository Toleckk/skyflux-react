import {gql} from '@apollo/client'

export const CREATE_SUBSCRIPTION = gql`
  mutation createSubscription($userId: ID!) {
    createSubscription(userId: $userId) {
      _id
    }
  }
`

export const REMOVE_SUBSCRIPTION = gql`
  mutation removeSubscription($userId: ID!) {
    removeSubscription(userId: $userId)
  }
`
