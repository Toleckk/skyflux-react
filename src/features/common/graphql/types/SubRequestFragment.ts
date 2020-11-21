/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SubRequestFragment
// ====================================================

export interface SubRequestFragment_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface SubRequestFragment {
  _id: string;
  accepted: boolean;
  from: SubRequestFragment_from;
}
