/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SubEventBodyFragment
// ====================================================

export interface SubEventBodyFragment_sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface SubEventBodyFragment_sub {
  _id: string;
  accepted: boolean;
  from: SubEventBodyFragment_sub_from;
}

export interface SubEventBodyFragment {
  sub: SubEventBodyFragment_sub;
}
