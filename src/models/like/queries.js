import deepmerge from 'deepmerge'
import {post} from 'models/post'
import {CREATE_LIKE, DELETE_LIKE, LIKE_CREATED, LIKE_DELETED} from './schemas'

export const createLike = (variables = {}) => ({
  mutation: CREATE_LIKE,
  variables,
  refetchQueries: (_, variables) => [post(variables.postId)],
})

export const deleteLike = (variables = {}) => ({
  mutation: DELETE_LIKE,
  variables,
  refetchQueries: (_, variables) => [post(variables.postId)],
})

export const likeCreated = (postId, variables = {}) => ({
  subscription: LIKE_CREATED,
  variables: deepmerge({postId}, variables),
})

export const likeDeleted = (postId, variables = {}) => ({
  subscription: LIKE_DELETED,
  variables: deepmerge({postId}, variables),
})
