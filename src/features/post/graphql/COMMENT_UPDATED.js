import {gql} from '@apollo/client'
import {MaybeCommentFragment} from './fragments'

export const COMMENT_UPDATED = gql`
  subscription CommentUpdated($postId: ID!) {
    commentUpdated(post_id: $postId) {
      ...MaybeCommentFragment
    }
  }
  ${MaybeCommentFragment}
`
