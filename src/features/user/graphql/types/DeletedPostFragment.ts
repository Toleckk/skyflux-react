/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DeletedPostFragment
// ====================================================

export interface DeletedPostFragment_user {
  _id: string;
  postsCount: number;
}

export interface DeletedPostFragment {
  _id: string;
  deleted: boolean;
  user: DeletedPostFragment_user;
}
