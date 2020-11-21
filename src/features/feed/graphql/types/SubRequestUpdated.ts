/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubRequestUpdated
// ====================================================

export interface SubRequestUpdated_subUpdated_DeletedSub {}

export interface SubRequestUpdated_subUpdated_Sub_from {
  _id: string;
  nickname: string;
}

export interface SubRequestUpdated_subUpdated_Sub {
  accepted: boolean;
  from: SubRequestUpdated_subUpdated_Sub_from;
}

export type SubRequestUpdated_subUpdated = SubRequestUpdated_subUpdated_DeletedSub | SubRequestUpdated_subUpdated_Sub;

export interface SubRequestUpdated {
  subUpdated: SubRequestUpdated_subUpdated;
}
