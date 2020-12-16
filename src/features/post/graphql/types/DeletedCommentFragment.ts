/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DeletedCommentFragment
// ====================================================

export interface DeletedCommentFragment_post {
  _id: string;
  commentsCount: number;
}

export interface DeletedCommentFragment {
  _id: string;
  deleted: boolean;
  post: DeletedCommentFragment_post;
}
