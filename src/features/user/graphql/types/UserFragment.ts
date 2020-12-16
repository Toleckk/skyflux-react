/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment_description {
  about: string | null;
  birthday: any | null;
  from: string | null;
}

export interface UserFragment_mySub {
  _id: string;
  accepted: boolean;
}

export interface UserFragment {
  _id: string;
  nickname: string;
  avatar: string | null;
  postsCount: number;
  private: boolean;
  subsCount: number;
  subscribersCount: number;
  description: UserFragment_description;
  mySub: UserFragment_mySub | null;
}
