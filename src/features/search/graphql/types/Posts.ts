/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts_edges_node_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Posts_posts_edges_node {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: Posts_posts_edges_node_user;
}

export interface Posts_posts_edges {
  cursor: string;
  node: Posts_posts_edges_node;
}

export interface Posts_posts_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface Posts_posts {
  edges: Posts_posts_edges[];
  pageInfo: Posts_posts_pageInfo;
}

export interface Posts {
  posts: Posts_posts;
}

export interface PostsVariables {
  query: string;
  first: number;
  after?: string | null;
}
