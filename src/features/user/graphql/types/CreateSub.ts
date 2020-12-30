/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSub
// ====================================================

export interface CreateSub_createSub_to_mySub {
  _id: string;
  accepted: boolean;
}

export interface CreateSub_createSub_to {
  _id: string;
  mySub: CreateSub_createSub_to_mySub | null;
}

export interface CreateSub_createSub {
  _id: string;
  to: CreateSub_createSub_to;
}

export interface CreateSub {
  createSub: CreateSub_createSub;
}

export interface CreateSubVariables {
  nickname: string;
}
