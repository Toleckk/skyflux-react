import {
  CREATE_USER,
  GET_FOUND_USERS,
  GET_SUGGESTIONS,
  GET_USER_BY_NICKNAME,
  MAKE_ACCOUNT_PRIVATE,
  MAKE_ACCOUNT_PUBLIC,
  ME,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
  UPDATE_PROFILE_INFO,
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
  refetchQueries: [me()],
})

export const updateProfileInfo = (variables = {}) => ({
  mutation: UPDATE_PROFILE_INFO,
  variables,
  refetchQueries: [me()],
})

export const updatePassword = (variables = {}) => ({
  mutation: UPDATE_PASSWORD,
  variables,
})

export const resetPassword = (variables = {}) => ({
  mutation: RESET_PASSWORD,
  variables,
  refetchQueries: [me()],
})

export const makeAccountPrivate = () => ({
  mutation: MAKE_ACCOUNT_PRIVATE,
  refetchQueries: [me()],
})

export const makeAccountPublic = () => ({
  mutation: MAKE_ACCOUNT_PUBLIC,
  refetchQueries: [me()],
})
