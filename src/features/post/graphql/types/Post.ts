/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Post
// ====================================================

export interface Post_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Post_post_comments_edges_node_post_user {
  _id: string;
}

export interface Post_post_comments_edges_node_post {
  user: Post_post_comments_edges_node_post_user;
}

export interface Post_post_comments_edges_node_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Post_post_comments_edges_node {
  _id: string;
  text: string;
  createdAt: any;
  post: Post_post_comments_edges_node_post;
  user: Post_post_comments_edges_node_user;
}

export interface Post_post_comments_edges {
  cursor: string;
  node: Post_post_comments_edges_node;
}

export interface Post_post_comments_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface Post_post_comments {
  edges: Post_post_comments_edges[];
  pageInfo: Post_post_comments_pageInfo;
}

export interface Post_post {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: Post_post_user;
  comments: Post_post_comments;
}

export interface Post {
  post: Post_post | null;
}

export interface PostVariables {
  _id: string;
  afterComment?: string | null;
  firstComments: number;
}
