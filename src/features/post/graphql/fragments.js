import {gql} from '@apollo/client'
import {CommentFragment} from 'features/shared/graphql'

export const DeletedCommentFragment = gql`
  fragment DeletedCommentFragment on DeletedComment {
    _id
    deleted
    post {
      _id
      commentsCount
    }
  }
`

export const MaybeCommentFragment = gql`
  fragment MaybeCommentFragment on MaybeComment {
    ...CommentFragment
    ...DeletedCommentFragment
  }
  ${CommentFragment}
  ${DeletedCommentFragment}
`
