/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MaybeCommentFragment
// ====================================================

export interface MaybeCommentFragment_Comment_post_user {
  _id: string;
}

export interface MaybeCommentFragment_Comment_post {
  user: MaybeCommentFragment_Comment_post_user;
}

export interface MaybeCommentFragment_Comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface MaybeCommentFragment_Comment {
  _id: string;
  text: string;
  createdAt: any;
  post: MaybeCommentFragment_Comment_post;
  user: MaybeCommentFragment_Comment_user;
}

export interface MaybeCommentFragment_DeletedComment_post {
  _id: string;
  commentsCount: number;
}

export interface MaybeCommentFragment_DeletedComment {
  _id: string;
  deleted: boolean;
  post: MaybeCommentFragment_DeletedComment_post;
}

export type MaybeCommentFragment = MaybeCommentFragment_Comment | MaybeCommentFragment_DeletedComment;
