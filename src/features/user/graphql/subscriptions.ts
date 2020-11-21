import {gql} from '@apollo/client'
import {MAYBE_POST_FRAGMENT, USER_FRAGMENT} from './fragments'

export const POST_UPDATED = gql`
  subscription PostUpdated($nickname: String!) {
    postUpdated(nickname: $nickname) {
      ...MaybePostFragment
    }
  }
  ${MAYBE_POST_FRAGMENT}
`

export const USER_UPDATED = gql`
  subscription UserUpdated($nickname: String!) {
    userUpdated(nickname: $nickname) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`
