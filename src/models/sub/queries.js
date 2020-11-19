import {ACCEPT_SUB, CREATE_SUB, DECLINE_SUB, DELETE_SUB} from './schemas'

export const createSub = (variables = {}) => ({
  mutation: CREATE_SUB,
  variables,
})

export const deleteSub = (variables = {}) => ({
  mutation: DELETE_SUB,
  variables,
})

export const acceptSub = (variables = {}) => ({
  mutation: ACCEPT_SUB,
  variables,
})

export const declineSub = (variables = {}) => ({
  mutation: DECLINE_SUB,
  variables,
})
