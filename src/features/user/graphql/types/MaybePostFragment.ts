/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MaybePostFragment
// ====================================================

export interface MaybePostFragment_Post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface MaybePostFragment_Post {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: MaybePostFragment_Post_user;
}

export interface MaybePostFragment_DeletedPost_user {
  _id: string;
  postsCount: number;
}

export interface MaybePostFragment_DeletedPost {
  _id: string;
  deleted: boolean;
  user: MaybePostFragment_DeletedPost_user;
}

export type MaybePostFragment = MaybePostFragment_Post | MaybePostFragment_DeletedPost;
