/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: PostsUpdated
// ====================================================

export interface PostsUpdated_postsUpdated_Post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface PostsUpdated_postsUpdated_Post {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: PostsUpdated_postsUpdated_Post_user;
}

export interface PostsUpdated_postsUpdated_DeletedPost_user {
  _id: string;
  postsCount: number;
}

export interface PostsUpdated_postsUpdated_DeletedPost {
  _id: string;
  deleted: boolean;
  user: PostsUpdated_postsUpdated_DeletedPost_user;
}

export type PostsUpdated_postsUpdated = PostsUpdated_postsUpdated_Post | PostsUpdated_postsUpdated_DeletedPost;

export interface PostsUpdated {
  postsUpdated: PostsUpdated_postsUpdated;
}

export interface PostsUpdatedVariables {
  ownerId: string;
}
