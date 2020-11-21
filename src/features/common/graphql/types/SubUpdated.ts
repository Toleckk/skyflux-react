/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubUpdated
// ====================================================

export interface SubUpdated_subUpdated_Sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface SubUpdated_subUpdated_Sub {
  _id: string;
  accepted: boolean;
  from: SubUpdated_subUpdated_Sub_from;
}

export interface SubUpdated_subUpdated_DeletedSub {
  _id: string;
  deleted: boolean;
}

export type SubUpdated_subUpdated = SubUpdated_subUpdated_Sub | SubUpdated_subUpdated_DeletedSub;

export interface SubUpdated {
  subUpdated: SubUpdated_subUpdated;
}
