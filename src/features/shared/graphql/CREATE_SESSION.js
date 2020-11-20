import {gql} from '@apollo/client'

export const CREATE_SESSION = gql`
  mutation CreateSession($login: String!, $password: String!) {
    createSession(credentials: {login: $login, password: $password})
  }
`
