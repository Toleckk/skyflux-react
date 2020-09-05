import {getPostById} from 'models/post'
import {CREATE_LIKE, REMOVE_LIKE} from './schemas'

export const createLike = (variables = {}) => ({
  mutation: CREATE_LIKE,
  variables,
  refetchQueries: (_, variables) => [getPostById(variables.postId)],
})

export const removeLike = (variables = {}) => ({
  mutation: REMOVE_LIKE,
  variables,
  refetchQueries: (_, variables) => [getPostById(variables.postId)],
})
