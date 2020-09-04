import {CREATE_SESSION} from './schemas'

export const createSession = (variables = {}) => ({
  mutation: CREATE_SESSION,
  variables,
})
