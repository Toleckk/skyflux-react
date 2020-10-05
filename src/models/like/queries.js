import {getPostById} from 'models/post'
import {CREATE_LIKE, DELETE_LIKE} from './schemas'

export const createLike = (variables = {}) => ({
  mutation: CREATE_LIKE,
  variables,
  refetchQueries: (_, variables) => [getPostById(variables.postId)],
})

export const deleteLike = (variables = {}) => ({
  mutation: DELETE_LIKE,
  variables,
  refetchQueries: (_, variables) => [getPostById(variables.postId)],
})
