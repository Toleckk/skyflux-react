/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
import * as Q from './queries'
import * as M from './mutations'
import * as S from './subscriptions'
import * as F from './fragments'

import {DeletedCommentFragment} from './types/DeletedCommentFragment'
import {MaybeCommentFragment} from './types/MaybeCommentFragment'
import {CreateComment, CreateCommentVariables} from './types/CreateComment'
import {DeleteComment, DeleteCommentVariables} from './types/DeleteComment'
import {CommentUpdated, CommentUpdatedVariables} from './types/CommentUpdated'
import {LikeUpdated, LikeUpdatedVariables} from './types/LikeUpdated'
import {Post, PostVariables} from './types/Post'

export * from './types/DeletedCommentFragment'
export * from './types/MaybeCommentFragment'
export * from './types/CreateComment'
export * from './types/DeleteComment'
export * from './types/CommentUpdated'
export * from './types/LikeUpdated'
export * from './types/Post'

export const DELETED_COMMENT_FRAGMENT: TypedDocumentNode<DeletedCommentFragment> =
  F.DELETED_COMMENT_FRAGMENT
export const MAYBE_COMMENT_FRAGMENT: TypedDocumentNode<MaybeCommentFragment> =
  F.MAYBE_COMMENT_FRAGMENT
export const CREATE_COMMENT: TypedDocumentNode<
  CreateComment,
  CreateCommentVariables
> = M.CREATE_COMMENT
export const DELETE_COMMENT: TypedDocumentNode<
  DeleteComment,
  DeleteCommentVariables
> = M.DELETE_COMMENT
export const COMMENT_UPDATED: TypedDocumentNode<
  CommentUpdated,
  CommentUpdatedVariables
> = S.COMMENT_UPDATED
export const LIKE_UPDATED: TypedDocumentNode<
  LikeUpdated,
  LikeUpdatedVariables
> = S.LIKE_UPDATED
export const POST: TypedDocumentNode<Post, PostVariables> = Q.POST
