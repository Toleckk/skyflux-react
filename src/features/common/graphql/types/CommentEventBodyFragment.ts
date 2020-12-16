/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentEventBodyFragment
// ====================================================

export interface CommentEventBodyFragment_comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentEventBodyFragment_comment_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentEventBodyFragment_comment_post {
  _id: string;
  text: string;
  user: CommentEventBodyFragment_comment_post_user;
}

export interface CommentEventBodyFragment_comment {
  _id: string;
  text: string;
  createdAt: any;
  user: CommentEventBodyFragment_comment_user;
  post: CommentEventBodyFragment_comment_post;
}

export interface CommentEventBodyFragment {
  comment: CommentEventBodyFragment_comment;
}
