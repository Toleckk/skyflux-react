import {getUserByNickname} from 'models/user'
import {CREATE_SUB, DELETE_SUB} from './schemas'

export const createSub = (variables = {}) => ({
  mutation: CREATE_SUB,
  variables,
  refetchQueries: (_, variables) => [getUserByNickname(variables.nickname)],
})

export const deleteSub = (variables = {}) => ({
  mutation: DELETE_SUB,
  variables,
  refetchQueries: (_, variables) => [getUserByNickname(variables.nickname)],
})
