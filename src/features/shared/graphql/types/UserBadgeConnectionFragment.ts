/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserBadgeConnectionFragment
// ====================================================

export interface UserBadgeConnectionFragment_edges_node {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface UserBadgeConnectionFragment_edges {
  cursor: string;
  node: UserBadgeConnectionFragment_edges_node;
}

export interface UserBadgeConnectionFragment_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface UserBadgeConnectionFragment {
  edges: UserBadgeConnectionFragment_edges[];
  pageInfo: UserBadgeConnectionFragment_pageInfo;
}
