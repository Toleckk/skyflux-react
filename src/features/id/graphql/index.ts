/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
import * as M from './mutations'

import {
  CreateResetRequest,
  CreateResetRequestVariables,
} from './types/CreateResetRequest'
import {CreateUser, CreateUserVariables} from './types/CreateUser'
import {ResetPassword, ResetPasswordVariables} from './types/ResetPassword'

export * from './types/CreateResetRequest'
export * from './types/CreateUser'
export * from './types/ResetPassword'

export const CREATE_RESET_REQUEST: TypedDocumentNode<
  CreateResetRequest,
  CreateResetRequestVariables
> = M.CREATE_RESET_REQUEST
export const CREATE_USER: TypedDocumentNode<CreateUser, CreateUserVariables> =
  M.CREATE_USER
export const RESET_PASSWORD: TypedDocumentNode<
  ResetPassword,
  ResetPasswordVariables
> = M.RESET_PASSWORD
