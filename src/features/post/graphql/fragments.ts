import {gql} from '@apollo/client'
import {COMMENT_FRAGMENT} from '@skyflux/react/features/shared/graphql'

export const DELETED_COMMENT_FRAGMENT = gql`
  fragment DeletedCommentFragment on DeletedComment {
    _id
    deleted
    post {
      _id
      commentsCount
    }
  }
`

export const MAYBE_COMMENT_FRAGMENT = gql`
  fragment MaybeCommentFragment on MaybeComment {
    ...CommentFragment
    ...DeletedCommentFragment
  }
  ${COMMENT_FRAGMENT}
  ${DELETED_COMMENT_FRAGMENT}
`
