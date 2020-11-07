import deepmerge from 'deepmerge'
import {subAccepted, subDeleted, subRequestCreated} from 'models/sub'
import {
  CREATE_USER,
  DOES_NICKNAME_EXIST,
  GET_FOUND_USERS,
  GET_SUGGESTIONS,
  GET_USER_BY_NICKNAME,
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

export const getUserByNickname = (nickname, variables = {}) => {
  const {subscription: subDel, variables: subDelVars} = subDeleted()
  const {subscription: accepted, variables: acceptedVars} = subAccepted()
  const {subscription: created, variables: createdVars} = subRequestCreated()

  return {
    query: GET_USER_BY_NICKNAME,
    variables: deepmerge({nickname}, variables),
    subscriptions: [
      {document: subDel, variables: subDelVars},
      {document: accepted, variables: acceptedVars},
      {document: created, variables: createdVars},
    ],
  }
}

export const getSuggestions = (variables = {}) => ({
  query: GET_SUGGESTIONS,
  variables,
})

export const getFoundUsers = (text, variables = {}) => ({
  query: GET_FOUND_USERS,
  variables: deepmerge({text}, variables),
  skip: !text && !variables.text,
})

export const doesNicknameExist = (nickname = undefined, variables = {}) => ({
  query: DOES_NICKNAME_EXIST,
  variables: deepmerge({nickname}, variables),
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
