/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubsUpdated
// ====================================================

export interface SubsUpdated_subsUpdated_Sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface SubsUpdated_subsUpdated_Sub {
  _id: string;
  accepted: boolean;
  from: SubsUpdated_subsUpdated_Sub_from;
}

export interface SubsUpdated_subsUpdated_DeletedSub {
  _id: string;
  deleted: boolean;
}

export type SubsUpdated_subsUpdated = SubsUpdated_subsUpdated_Sub | SubsUpdated_subsUpdated_DeletedSub;

export interface SubsUpdated {
  subsUpdated: SubsUpdated_subsUpdated;
}

export interface SubsUpdatedVariables {
  myId: string;
}
