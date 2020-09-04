import {
  CREATE_USER,
  GET_FOUND_USERS,
  GET_SUGGESTIONS,
  GET_USER_BY_NICKNAME,
  ME,
} from './schemas'

export const me = () => ({
  query: ME,
})

export const getUserByNickname = nickname => ({
  query: GET_USER_BY_NICKNAME,
  variables: {nickname},
})

export const getSuggestions = () => ({
  query: GET_SUGGESTIONS,
})

export const getFoundUsers = text => ({
  query: GET_FOUND_USERS,
  variables: {text},
})

export const createUser = (variables = {}) => ({
  mutation: CREATE_USER,
  variables,
})
