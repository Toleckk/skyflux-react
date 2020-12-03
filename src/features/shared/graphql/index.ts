/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
import * as Q from './queries'
import * as M from './mutations'
import * as F from './fragments'

import {UserBadgeFragment} from './types/UserBadgeFragment'
import {CommentFragment} from './types/CommentFragment'
import {CommentConnectionFragment} from './types/CommentConnectionFragment'
import {PostBadgeFragment} from './types/PostBadgeFragment'
import {CommentWithPostFragment} from './types/CommentWithPostFragment'
import {PostFragment} from './types/PostFragment'
import {PostConnectionFragment} from './types/PostConnectionFragment'
import {UserBadgeConnectionFragment} from './types/UserBadgeConnectionFragment'
import {CreateLike, CreateLikeVariables} from './types/CreateLike'
import {CreatePost, CreatePostVariables} from './types/CreatePost'
import {DeleteLike, DeleteLikeVariables} from './types/DeleteLike'
import {Me} from './types/Me'

export * from './types/UserBadgeFragment'
export * from './types/CommentFragment'
export * from './types/CommentConnectionFragment'
export * from './types/PostBadgeFragment'
export * from './types/CommentWithPostFragment'
export * from './types/PostFragment'
export * from './types/PostConnectionFragment'
export * from './types/UserBadgeConnectionFragment'
export * from './types/CreateLike'
export * from './types/CreatePost'
export * from './types/DeleteLike'
export * from './types/Me'

export const USER_BADGE_FRAGMENT: TypedDocumentNode<UserBadgeFragment> =
  F.USER_BADGE_FRAGMENT
export const COMMENT_FRAGMENT: TypedDocumentNode<CommentFragment> =
  F.COMMENT_FRAGMENT
export const COMMENT_CONNECTION_FRAGMENT: TypedDocumentNode<CommentConnectionFragment> =
  F.COMMENT_CONNECTION_FRAGMENT
export const POST_BADGE_FRAGMENT: TypedDocumentNode<PostBadgeFragment> =
  F.POST_BADGE_FRAGMENT
export const COMMENT_WITH_POST_FRAGMENT: TypedDocumentNode<CommentWithPostFragment> =
  F.COMMENT_WITH_POST_FRAGMENT
export const POST_FRAGMENT: TypedDocumentNode<PostFragment> = F.POST_FRAGMENT
export const POST_CONNECTION_FRAGMENT: TypedDocumentNode<PostConnectionFragment> =
  F.POST_CONNECTION_FRAGMENT
export const USER_BADGE_CONNECTION_FRAGMENT: TypedDocumentNode<UserBadgeConnectionFragment> =
  F.USER_BADGE_CONNECTION_FRAGMENT
export const CREATE_LIKE: TypedDocumentNode<CreateLike, CreateLikeVariables> =
  M.CREATE_LIKE
export const CREATE_POST: TypedDocumentNode<CreatePost, CreatePostVariables> =
  M.CREATE_POST
export const DELETE_LIKE: TypedDocumentNode<DeleteLike, DeleteLikeVariables> =
  M.DELETE_LIKE
export const ME: TypedDocumentNode<Me> = Q.ME
