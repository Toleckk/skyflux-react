/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SubRequestConnectionFragment
// ====================================================

export interface SubRequestConnectionFragment_edges_node_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface SubRequestConnectionFragment_edges_node {
  _id: string;
  accepted: boolean;
  from: SubRequestConnectionFragment_edges_node_from;
}

export interface SubRequestConnectionFragment_edges {
  cursor: string;
  node: SubRequestConnectionFragment_edges_node;
}

export interface SubRequestConnectionFragment_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface SubRequestConnectionFragment {
  edges: SubRequestConnectionFragment_edges[];
  pageInfo: SubRequestConnectionFragment_pageInfo;
}
