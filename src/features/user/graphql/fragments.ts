import {gql} from '@apollo/client'
import {POST_FRAGMENT} from 'features/shared/graphql'

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    _id
    nickname
    avatar
    postsCount
    private
    subsCount
    subscribersCount
    description {
      about
      birthday
      from
    }
    mySub {
      _id
      accepted
    }
  }
`

export const DELETED_POST_FRAGMENT = gql`
  fragment DeletedPostFragment on DeletedPost {
    _id
    deleted
    user {
      _id
      postsCount
    }
  }
`

export const MAYBE_POST_FRAGMENT = gql`
  fragment MaybePostFragment on MaybePost {
    ...PostFragment
    ...DeletedPostFragment
  }
  ${POST_FRAGMENT}
  ${DELETED_POST_FRAGMENT}
`
