/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteSub
// ====================================================

export interface DeleteSub_deleteSub_to_mySub {
  _id: string;
}

export interface DeleteSub_deleteSub_to {
  _id: string;
  mySub: DeleteSub_deleteSub_to_mySub | null;
}

export interface DeleteSub_deleteSub {
  _id: string;
  to: DeleteSub_deleteSub_to;
}

export interface DeleteSub {
  deleteSub: DeleteSub_deleteSub | null;
}

export interface DeleteSubVariables {
  nickname: string;
}
