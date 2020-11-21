/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
import * as Q from './queries'
import * as M from './mutations'

import {MakeAccountPrivate} from './types/MakeAccountPrivate'
import {MakeAccountPublic} from './types/MakeAccountPublic'
import {UpdateNickname, UpdateNicknameVariables} from './types/UpdateNickname'
import {UpdatePassword, UpdatePasswordVariables} from './types/UpdatePassword'
import {
  UpdateProfileInfo,
  UpdateProfileInfoVariables,
} from './types/UpdateProfileInfo'
import {
  DoesNicknameExist,
  DoesNicknameExistVariables,
} from './types/DoesNicknameExist'
import {MyProfile} from './types/MyProfile'

export * from './types/MakeAccountPrivate'
export * from './types/MakeAccountPublic'
export * from './types/UpdateNickname'
export * from './types/UpdatePassword'
export * from './types/UpdateProfileInfo'
export * from './types/DoesNicknameExist'
export * from './types/MyProfile'

export const MAKE_ACCOUNT_PRIVATE: TypedDocumentNode<MakeAccountPrivate> =
  M.MAKE_ACCOUNT_PRIVATE
export const MAKE_ACCOUNT_PUBLIC: TypedDocumentNode<MakeAccountPublic> =
  M.MAKE_ACCOUNT_PUBLIC
export const UPDATE_NICKNAME: TypedDocumentNode<
  UpdateNickname,
  UpdateNicknameVariables
> = M.UPDATE_NICKNAME
export const UPDATE_PASSWORD: TypedDocumentNode<
  UpdatePassword,
  UpdatePasswordVariables
> = M.UPDATE_PASSWORD
export const UPDATE_PROFILE_INFO: TypedDocumentNode<
  UpdateProfileInfo,
  UpdateProfileInfoVariables
> = M.UPDATE_PROFILE_INFO
export const DOES_NICKNAME_EXIST: TypedDocumentNode<
  DoesNicknameExist,
  DoesNicknameExistVariables
> = Q.DOES_NICKNAME_EXIST
export const MY_PROFILE: TypedDocumentNode<MyProfile> = Q.MY_PROFILE
