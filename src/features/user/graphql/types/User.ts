/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_description {
  about: string | null;
  birthday: any | null;
  from: string | null;
}

export interface User_user_mySub {
  _id: string;
  accepted: boolean;
}

export interface User_user_posts_edges_node_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface User_user_posts_edges_node {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: User_user_posts_edges_node_user;
}

export interface User_user_posts_edges {
  cursor: string;
  node: User_user_posts_edges_node;
}

export interface User_user_posts_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface User_user_posts {
  edges: User_user_posts_edges[];
  pageInfo: User_user_posts_pageInfo;
}

export interface User_user {
  _id: string;
  nickname: string;
  avatar: string | null;
  postsCount: number;
  private: boolean;
  subsCount: number;
  subscribersCount: number;
  description: User_user_description;
  mySub: User_user_mySub | null;
  posts: User_user_posts;
}

export interface User {
  user: User_user | null;
}

export interface UserVariables {
  nickname: string;
  firstPosts: number;
  afterPost?: string | null;
}
