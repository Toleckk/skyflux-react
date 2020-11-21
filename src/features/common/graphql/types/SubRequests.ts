/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SubRequests
// ====================================================

export interface SubRequests_subRequests_edges_node_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface SubRequests_subRequests_edges_node {
  _id: string;
  accepted: boolean;
  from: SubRequests_subRequests_edges_node_from;
}

export interface SubRequests_subRequests_edges {
  cursor: string;
  node: SubRequests_subRequests_edges_node;
}

export interface SubRequests_subRequests_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface SubRequests_subRequests {
  edges: SubRequests_subRequests_edges[];
  pageInfo: SubRequests_subRequests_pageInfo;
}

export interface SubRequests {
  subRequests: SubRequests_subRequests;
}

export interface SubRequestsVariables {
  first: number;
  after?: string | null;
}
