/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
import * as Q from './queries'
import * as M from './mutations'
import * as S from './subscriptions'
import * as F from './fragments'

import {UserFragment} from './types/UserFragment'
import {DeletedPostFragment} from './types/DeletedPostFragment'
import {MaybePostFragment} from './types/MaybePostFragment'
import {CreateSub, CreateSubVariables} from './types/CreateSub'
import {DeletePost, DeletePostVariables} from './types/DeletePost'
import {DeleteSub, DeleteSubVariables} from './types/DeleteSub'
import {PostsUpdated, PostsUpdatedVariables} from './types/PostsUpdated'
import {UserUpdated, UserUpdatedVariables} from './types/UserUpdated'
import {User, UserVariables} from './types/User'

export * from './types/UserFragment'
export * from './types/DeletedPostFragment'
export * from './types/MaybePostFragment'
export * from './types/CreateSub'
export * from './types/DeletePost'
export * from './types/DeleteSub'
export * from './types/PostsUpdated'
export * from './types/UserUpdated'
export * from './types/User'

export const USER_FRAGMENT: TypedDocumentNode<UserFragment> = F.USER_FRAGMENT
export const DELETED_POST_FRAGMENT: TypedDocumentNode<DeletedPostFragment> =
  F.DELETED_POST_FRAGMENT
export const MAYBE_POST_FRAGMENT: TypedDocumentNode<MaybePostFragment> =
  F.MAYBE_POST_FRAGMENT
export const CREATE_SUB: TypedDocumentNode<CreateSub, CreateSubVariables> =
  M.CREATE_SUB
export const DELETE_POST: TypedDocumentNode<DeletePost, DeletePostVariables> =
  M.DELETE_POST
export const DELETE_SUB: TypedDocumentNode<DeleteSub, DeleteSubVariables> =
  M.DELETE_SUB
export const POSTS_UPDATED: TypedDocumentNode<
  PostsUpdated,
  PostsUpdatedVariables
> = S.POSTS_UPDATED
export const USER_UPDATED: TypedDocumentNode<
  UserUpdated,
  UserUpdatedVariables
> = S.USER_UPDATED
export const USER: TypedDocumentNode<User, UserVariables> = Q.USER
