/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Feed
// ====================================================

export interface Feed_feed_edges_node_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Feed_feed_edges_node {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: Feed_feed_edges_node_user;
}

export interface Feed_feed_edges {
  cursor: string;
  node: Feed_feed_edges_node;
}

export interface Feed_feed_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface Feed_feed {
  edges: Feed_feed_edges[];
  pageInfo: Feed_feed_pageInfo;
}

export interface Feed {
  feed: Feed_feed;
}

export interface FeedVariables {
  first: number;
  after?: string | null;
}
