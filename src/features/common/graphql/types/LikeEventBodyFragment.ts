/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LikeEventBodyFragment
// ====================================================

export interface LikeEventBodyFragment_like_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface LikeEventBodyFragment_like_post {
  _id: string;
  text: string;
}

export interface LikeEventBodyFragment_like {
  _id: string;
  user: LikeEventBodyFragment_like_user;
  post: LikeEventBodyFragment_like_post;
}

export interface LikeEventBodyFragment {
  like: LikeEventBodyFragment_like;
}
