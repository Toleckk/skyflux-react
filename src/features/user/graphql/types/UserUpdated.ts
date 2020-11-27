/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: UserUpdated
// ====================================================

export interface UserUpdated_userUpdated_description {
  about: string | null;
  birthday: any | null;
  from: string | null;
}

export interface UserUpdated_userUpdated_mySub {
  _id: string;
  accepted: boolean;
}

export interface UserUpdated_userUpdated {
  _id: string;
  nickname: string;
  avatar: string | null;
  postsCount: number;
  private: boolean;
  subsCount: number;
  subscribersCount: number;
  description: UserUpdated_userUpdated_description;
  mySub: UserUpdated_userUpdated_mySub | null;
}

export interface UserUpdated {
  userUpdated: UserUpdated_userUpdated;
}

export interface UserUpdatedVariables {
  id: string;
}
