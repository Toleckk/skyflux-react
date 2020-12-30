/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: LikeUpdated
// ====================================================

export interface LikeUpdated_likeUpdated_Like_post {
  likesCount: number;
  isLikedByMe: boolean;
}

export interface LikeUpdated_likeUpdated_Like {
  _id: string;
  post: LikeUpdated_likeUpdated_Like_post;
}

export interface LikeUpdated_likeUpdated_DeletedLike_post {
  likesCount: number;
  isLikedByMe: boolean;
}

export interface LikeUpdated_likeUpdated_DeletedLike {
  _id: string;
  deleted: boolean;
  post: LikeUpdated_likeUpdated_DeletedLike_post;
}

export type LikeUpdated_likeUpdated = LikeUpdated_likeUpdated_Like | LikeUpdated_likeUpdated_DeletedLike;

export interface LikeUpdated {
  likeUpdated: LikeUpdated_likeUpdated;
}

export interface LikeUpdatedVariables {
  postId: string;
}
