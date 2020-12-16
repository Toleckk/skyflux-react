/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LikeBadgeFragment
// ====================================================

export interface LikeBadgeFragment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface LikeBadgeFragment {
  _id: string;
  user: LikeBadgeFragment_user;
}
