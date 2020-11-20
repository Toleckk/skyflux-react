import {gql} from '@apollo/client'
import {UserFragment} from './fragments'

export const USER_UPDATED = gql`
  subscription UserUpdated($nickname: String!) {
    userUpdated(nickname: $nickname) {
      ...UserFragment
    }
  }
  ${UserFragment}
`
