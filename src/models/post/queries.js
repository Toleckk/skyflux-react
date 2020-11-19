import {CREATE_POST, DELETE_POST} from './schemas'

export const createPost = (variables = {}) => ({
  mutation: CREATE_POST,
  variables,
})

export const deletePost = (variables = {}) => ({
  mutation: DELETE_POST,
  variables,
})
