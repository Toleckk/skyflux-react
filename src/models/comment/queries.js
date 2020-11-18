import deepmerge from 'deepmerge'
import {
  COMMENT_CREATED,
  COMMENT_DELETED,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from './schemas'

export const createComment = (variables = {}) => ({
  mutation: CREATE_COMMENT,
  variables,
})

export const deleteComment = (variables = {}) => ({
  mutation: DELETE_COMMENT,
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
