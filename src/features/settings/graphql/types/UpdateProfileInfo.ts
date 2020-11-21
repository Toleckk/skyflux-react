/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DescriptionInput } from "./../../../../_types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProfileInfo
// ====================================================

export interface UpdateProfileInfo_updateProfileInfo_description {
  about: string | null;
  birthday: any | null;
  from: string | null;
}

export interface UpdateProfileInfo_updateProfileInfo {
  _id: string;
  avatar: string | null;
  description: UpdateProfileInfo_updateProfileInfo_description;
}

export interface UpdateProfileInfo {
  updateProfileInfo: UpdateProfileInfo_updateProfileInfo;
}

export interface UpdateProfileInfoVariables {
  avatar?: string | null;
  description: DescriptionInput;
}
