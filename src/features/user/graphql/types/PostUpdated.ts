/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: PostUpdated
// ====================================================

export interface PostUpdated_postUpdated_Post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface PostUpdated_postUpdated_Post {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: PostUpdated_postUpdated_Post_user;
}

export interface PostUpdated_postUpdated_DeletedPost_user {
  _id: string;
  postsCount: number;
}

export interface PostUpdated_postUpdated_DeletedPost {
  _id: string;
  deleted: boolean;
  user: PostUpdated_postUpdated_DeletedPost_user;
}

export type PostUpdated_postUpdated = PostUpdated_postUpdated_Post | PostUpdated_postUpdated_DeletedPost;

export interface PostUpdated {
  postUpdated: PostUpdated_postUpdated;
}

export interface PostUpdatedVariables {
  nickname: string;
}
