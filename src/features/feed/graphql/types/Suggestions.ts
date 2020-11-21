/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Suggestions
// ====================================================

export interface Suggestions_suggestions_edges_node {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Suggestions_suggestions_edges {
  cursor: string;
  node: Suggestions_suggestions_edges_node;
}

export interface Suggestions_suggestions_pageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface Suggestions_suggestions {
  edges: Suggestions_suggestions_edges[];
  pageInfo: Suggestions_suggestions_pageInfo;
}

export interface Suggestions {
  suggestions: Suggestions_suggestions;
}
