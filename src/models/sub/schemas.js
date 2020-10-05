import {gql} from '@apollo/client'

export const CREATE_SUB = gql`
  mutation createSubscription($nickname: String!) {
    createSub(nickname: $nickname) {
      _id
    }
  }
`

export const DELETE_SUB = gql`
  mutation deleteSub($nickname: String!) {
    deleteSub(nickname: $nickname)
  }
`

export const ACCEPT_SUB = gql`
  mutation acceptSub($_id: ID!) {
    acceptSub(sub_id: $_id) {
      _id
      accepted
    }
  }
`
