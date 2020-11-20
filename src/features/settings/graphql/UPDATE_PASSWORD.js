import {gql} from '@apollo/client'

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(
      credentials: {oldPassword: $oldPassword, newPassword: $newPassword}
    )
  }
`
