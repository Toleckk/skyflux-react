import {gql} from '@apollo/client'
import {MaybePostFragment} from './fragments'

export const POST_UPDATED = gql`
  subscription PostUpdated($nickname: String!) {
    postUpdated(nickname: $nickname) {
      ...MaybePostFragment
    }
  }
  ${MaybePostFragment}
`
