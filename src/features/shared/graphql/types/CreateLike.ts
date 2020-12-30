/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateLike
// ====================================================

export interface CreateLike_createLike_post {
  _id: string;
  likesCount: number;
  isLikedByMe: boolean;
}

export interface CreateLike_createLike {
  _id: string;
  post: CreateLike_createLike_post;
}

export interface CreateLike {
  createLike: CreateLike_createLike;
}

export interface CreateLikeVariables {
  postId: string;
}
