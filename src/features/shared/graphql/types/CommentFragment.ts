/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentFragment
// ====================================================

export interface CommentFragment_post_user {
  _id: string;
}

export interface CommentFragment_post {
  user: CommentFragment_post_user;
}

export interface CommentFragment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentFragment {
  _id: string;
  text: string;
  createdAt: any;
  post: CommentFragment_post;
  user: CommentFragment_user;
}
