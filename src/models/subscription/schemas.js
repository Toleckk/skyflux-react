import {gql} from '@apollo/client'

export const CREATE_SUBSCRIPTION = gql`
  mutation createSubscription($nickname: String!) {
    createSubscription(nickname: $nickname) {
      _id
    }
  }
`

export const REMOVE_SUBSCRIPTION = gql`
  mutation removeSubscription($nickname: String!) {
    removeSubscription(nickname: $nickname)
  }
`
