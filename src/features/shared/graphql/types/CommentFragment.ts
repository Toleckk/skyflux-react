/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentFragment
// ====================================================

export interface CommentFragment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentFragment {
  _id: string;
  text: string;
  createdAt: any;
  user: CommentFragment_user;
}
