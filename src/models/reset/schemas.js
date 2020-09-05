import {gql} from '@apollo/client'

export const CREATE_RESET_REQUEST = gql`
  mutation createResetRequest($login: String!) {
    createResetRequest(login: $login)
  }
`
