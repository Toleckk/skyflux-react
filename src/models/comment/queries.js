import {CREATE_COMMENT, DELETE_COMMENT} from './schemas'

export const createComment = (variables = {}) => ({
  mutation: CREATE_COMMENT,
  variables,
})

export const deleteComment = (variables = {}) => ({
  mutation: DELETE_COMMENT,
  variables,
})
