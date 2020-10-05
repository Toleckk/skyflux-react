import {getUserByNickname} from 'models/user'
import {ACCEPT_SUB, CREATE_SUB, DELETE_SUB} from './schemas'

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

export const acceptSub = (variables = {}) => ({
  mutation: ACCEPT_SUB,
  variables,
})
