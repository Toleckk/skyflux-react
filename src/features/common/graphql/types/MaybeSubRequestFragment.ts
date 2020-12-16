/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MaybeSubRequestFragment
// ====================================================

export interface MaybeSubRequestFragment_Sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface MaybeSubRequestFragment_Sub {
  _id: string;
  accepted: boolean;
  from: MaybeSubRequestFragment_Sub_from;
}

export interface MaybeSubRequestFragment_DeletedSub {
  _id: string;
  deleted: boolean;
}

export type MaybeSubRequestFragment = MaybeSubRequestFragment_Sub | MaybeSubRequestFragment_DeletedSub;
