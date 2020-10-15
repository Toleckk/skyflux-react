import deepmerge from 'deepmerge'
import {addNodeToConnection, deleteNodeFromConnection} from 'utils'
import {
  COMMENT_CREATED,
  COMMENT_DELETED,
  CREATE_COMMENT,
  GET_COMMENTS_BY_POST_ID,
} from './schemas'

export const getCommentsByPostId = (postId, variables = {}) => {
  const {subscription: created, variables: createdVars} = commentCreated(postId)
  const {subscription: deleted, variables: deletedVars} = commentDeleted(postId)

  return {
    query: GET_COMMENTS_BY_POST_ID,
    variables: deepmerge({postId}, variables),
    subscriptions: [
      {
        document: created,
        variables: createdVars,
        updateQuery: ({getCommentsByPostId}, {subscriptionData: {data}}) => ({
          getCommentsByPostId: addNodeToConnection(
            data.commentCreated,
            getCommentsByPostId,
          ),
        }),
      },
      {
        document: deleted,
        variables: deletedVars,
        updateQuery: ({getCommentsByPostId}, {subscriptionData: {data}}) => ({
          getCommentsByPostId: deleteNodeFromConnection(
            data.commentDeleted,
            getCommentsByPostId,
          ),
        }),
      },
    ],
  }
}

export const createComment = (variables = {}) => ({
  mutation: CREATE_COMMENT,
  variables,
})

export const commentCreated = (postId, variables = {}) => ({
  subscription: COMMENT_CREATED,
  variables: deepmerge({postId}, variables),
})

export const commentDeleted = (postId, variables = {}) => ({
  subscription: COMMENT_DELETED,
  variables: deepmerge({postId}, variables),
})
