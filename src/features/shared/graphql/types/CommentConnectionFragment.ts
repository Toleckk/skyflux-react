/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentConnectionFragment
// ====================================================

export interface CommentConnectionFragment_edges_node_post_user {
  _id: string;
}

export interface CommentConnectionFragment_edges_node_post {
  user: CommentConnectionFragment_edges_node_post_user;
}

export interface CommentConnectionFragment_edges_node_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentConnectionFragment_edges_node {
  _id: string;
  text: string;
  createdAt: any;
  post: CommentConnectionFragment_edges_node_post;
  user: CommentConnectionFragment_edges_node_user;
}

export interface CommentConnectionFragment_edges {
  cursor: string;
  node: CommentConnectionFragment_edges_node;
}

export interface CommentConnectionFragment_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface CommentConnectionFragment {
  edges: CommentConnectionFragment_edges[];
  pageInfo: CommentConnectionFragment_pageInfo;
}
