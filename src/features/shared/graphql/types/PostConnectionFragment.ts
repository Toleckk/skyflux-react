/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostConnectionFragment
// ====================================================

export interface PostConnectionFragment_edges_node_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface PostConnectionFragment_edges_node {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: PostConnectionFragment_edges_node_user;
}

export interface PostConnectionFragment_edges {
  cursor: string;
  node: PostConnectionFragment_edges_node;
}

export interface PostConnectionFragment_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface PostConnectionFragment {
  edges: PostConnectionFragment_edges[];
  pageInfo: PostConnectionFragment_pageInfo;
}
