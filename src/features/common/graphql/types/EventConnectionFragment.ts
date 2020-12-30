/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType } from "./../../../../_types/globalTypes";

// ====================================================
// GraphQL fragment: EventConnectionFragment
// ====================================================

export interface EventConnectionFragment_edges_node_subj_LikeEventBody_like_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventConnectionFragment_edges_node_subj_LikeEventBody_like_post {
  _id: string;
  text: string;
}

export interface EventConnectionFragment_edges_node_subj_LikeEventBody_like {
  _id: string;
  user: EventConnectionFragment_edges_node_subj_LikeEventBody_like_user;
  post: EventConnectionFragment_edges_node_subj_LikeEventBody_like_post;
}

export interface EventConnectionFragment_edges_node_subj_LikeEventBody {
  like: EventConnectionFragment_edges_node_subj_LikeEventBody_like;
}

export interface EventConnectionFragment_edges_node_subj_CommentEventBody_comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventConnectionFragment_edges_node_subj_CommentEventBody_comment_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventConnectionFragment_edges_node_subj_CommentEventBody_comment_post {
  _id: string;
  text: string;
  user: EventConnectionFragment_edges_node_subj_CommentEventBody_comment_post_user;
}

export interface EventConnectionFragment_edges_node_subj_CommentEventBody_comment {
  _id: string;
  text: string;
  createdAt: any;
  user: EventConnectionFragment_edges_node_subj_CommentEventBody_comment_user;
  post: EventConnectionFragment_edges_node_subj_CommentEventBody_comment_post;
}

export interface EventConnectionFragment_edges_node_subj_CommentEventBody {
  comment: EventConnectionFragment_edges_node_subj_CommentEventBody_comment;
}

export interface EventConnectionFragment_edges_node_subj_SubEventBody_sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventConnectionFragment_edges_node_subj_SubEventBody_sub {
  _id: string;
  accepted: boolean;
  from: EventConnectionFragment_edges_node_subj_SubEventBody_sub_from;
}

export interface EventConnectionFragment_edges_node_subj_SubEventBody {
  sub: EventConnectionFragment_edges_node_subj_SubEventBody_sub;
}

export type EventConnectionFragment_edges_node_subj = EventConnectionFragment_edges_node_subj_LikeEventBody | EventConnectionFragment_edges_node_subj_CommentEventBody | EventConnectionFragment_edges_node_subj_SubEventBody;

export interface EventConnectionFragment_edges_node {
  _id: string;
  createdAt: any;
  kind: EventType;
  subj: EventConnectionFragment_edges_node_subj;
}

export interface EventConnectionFragment_edges {
  cursor: string;
  node: EventConnectionFragment_edges_node;
}

export interface EventConnectionFragment_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface EventConnectionFragment {
  edges: EventConnectionFragment_edges[];
  pageInfo: EventConnectionFragment_pageInfo;
}
