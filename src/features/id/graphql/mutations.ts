import {gql} from '@apollo/client'

export const CREATE_RESET_REQUEST = gql`
  mutation CreateResetRequest($login: String!) {
    createResetRequest(login: $login)
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(user: {email: $email, password: $password}) {
      _id
    }
  }
`

export const RESET_PASSWORD = gql`
  mutation ResetPassword($token: String!, $password: String!) {
    resetPassword(credentials: {token: $token, password: $password})
  }
`
