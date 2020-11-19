import {CREATE_LIKE, DELETE_LIKE} from './schemas'

export const createLike = (variables = {}) => ({
  mutation: CREATE_LIKE,
  variables,
})

export const deleteLike = (variables = {}) => ({
  mutation: DELETE_LIKE,
  variables,
})
