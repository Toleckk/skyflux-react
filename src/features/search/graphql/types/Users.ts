/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users_edges_node {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Users_users_edges {
  cursor: string;
  node: Users_users_edges_node;
}

export interface Users_users_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface Users_users {
  edges: Users_users_edges[];
  pageInfo: Users_users_pageInfo;
}

export interface Users {
  users: Users_users | null;
}

export interface UsersVariables {
  query: string;
  after?: string | null;
  first: number;
}
