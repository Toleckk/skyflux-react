import {CREATE_RESET_REQUEST} from './schemas'

export const createResetRequest = (variables = {}) => ({
  mutation: CREATE_RESET_REQUEST,
  variables,
})
