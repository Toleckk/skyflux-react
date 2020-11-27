import {gql} from '@apollo/client'
import {MAYBE_POST_FRAGMENT, USER_FRAGMENT} from './fragments'

export const POSTS_UPDATED = gql`
  subscription PostsUpdated($ownerId: ID!) {
    postsUpdated(ownerId: $ownerId) {
      ...MaybePostFragment
    }
  }
  ${MAYBE_POST_FRAGMENT}
`

export const USER_UPDATED = gql`
  subscription UserUpdated($id: ID!) {
    userUpdated(_id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`
