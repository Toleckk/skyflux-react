/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentWithPostFragment
// ====================================================

export interface CommentWithPostFragment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentWithPostFragment_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentWithPostFragment_post {
  _id: string;
  text: string;
  user: CommentWithPostFragment_post_user;
}

export interface CommentWithPostFragment {
  _id: string;
  text: string;
  createdAt: any;
  user: CommentWithPostFragment_user;
  post: CommentWithPostFragment_post;
}
