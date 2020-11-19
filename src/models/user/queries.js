import deepmerge from 'deepmerge'
import {
  CREATE_USER,
  DOES_NICKNAME_EXIST,
  MAKE_ACCOUNT_PRIVATE,
  MAKE_ACCOUNT_PUBLIC,
  ME,
  RESET_PASSWORD,
  UPDATE_NICKNAME,
  UPDATE_PASSWORD,
  UPDATE_PROFILE_INFO,
} from './schemas'

export const me = (variables = {}) => ({
  query: ME,
  variables,
})

export const doesNicknameExist = (nickname = undefined, variables = {}) => ({
  query: DOES_NICKNAME_EXIST,
  variables: deepmerge({nickname}, variables),
  skip: !nickname || !variables.nickname,
})

export const createUser = (variables = {}) => ({
  mutation: CREATE_USER,
  variables,
})

export const updateProfileInfo = (variables = {}) => ({
  mutation: UPDATE_PROFILE_INFO,
  variables,
})

export const updateNickname = (variables = {}) => ({
  mutation: UPDATE_NICKNAME,
  variables,
})

export const updatePassword = (variables = {}) => ({
  mutation: UPDATE_PASSWORD,
  variables,
})

export const resetPassword = (variables = {}) => ({
  mutation: RESET_PASSWORD,
  refetchQueries: [me()],
  variables,
})

export const makeAccountPrivate = (variables = {}) => ({
  mutation: MAKE_ACCOUNT_PRIVATE,
  variables,
})

export const makeAccountPublic = (variables = {}) => ({
  mutation: MAKE_ACCOUNT_PUBLIC,
  variables,
})
