import {gql} from '@apollo/client'
import {PostFragment} from 'features/shared/graphql'

export const UserFragment = gql`
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

export const DeletedPostFragment = gql`
  fragment DeletedPostFragment on DeletedPost {
    _id
    deleted
    user {
      _id
      postsCount
    }
  }
`

export const MaybePostFragment = gql`
  fragment MaybePostFragment on MaybePost {
    ...PostFragment
    ...DeletedPostFragment
  }
  ${PostFragment}
  ${DeletedPostFragment}
`
