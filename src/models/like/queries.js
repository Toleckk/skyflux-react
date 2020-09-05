import {CREATE_LIKE, REMOVE_LIKE} from './schemas'

export const createLike = (variables = {}) => ({
  mutation: CREATE_LIKE,
  variables,
})

export const removeLike = (variables = {}) => ({
  mutation: REMOVE_LIKE,
  variables,
})
