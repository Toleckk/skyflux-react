/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteLike
// ====================================================

export interface DeleteLike_deleteLike_post {
  _id: string;
  likesCount: number;
  isLikedByMe: boolean;
}

export interface DeleteLike_deleteLike {
  _id: string;
  deleted: boolean;
  post: DeleteLike_deleteLike_post;
}

export interface DeleteLike {
  deleteLike: DeleteLike_deleteLike;
}

export interface DeleteLikeVariables {
  postId: string;
}
