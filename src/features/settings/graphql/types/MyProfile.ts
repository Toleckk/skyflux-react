/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyProfile
// ====================================================

export interface MyProfile_me_description {
  about: string | null;
  birthday: any | null;
  from: string | null;
}

export interface MyProfile_me {
  _id: string;
  nickname: string;
  avatar: string | null;
  private: boolean;
  description: MyProfile_me_description;
}

export interface MyProfile {
  me: MyProfile_me | null;
}
