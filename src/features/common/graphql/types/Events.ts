/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType } from "./../../../../_types/globalTypes";

// ====================================================
// GraphQL query operation: Events
// ====================================================

export interface Events_events_edges_node_subj_LikeEventBody_like_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Events_events_edges_node_subj_LikeEventBody_like_post {
  _id: string;
  text: string;
}

export interface Events_events_edges_node_subj_LikeEventBody_like {
  _id: string;
  user: Events_events_edges_node_subj_LikeEventBody_like_user;
  post: Events_events_edges_node_subj_LikeEventBody_like_post;
}

export interface Events_events_edges_node_subj_LikeEventBody {
  like: Events_events_edges_node_subj_LikeEventBody_like;
}

export interface Events_events_edges_node_subj_CommentEventBody_comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Events_events_edges_node_subj_CommentEventBody_comment_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Events_events_edges_node_subj_CommentEventBody_comment_post {
  _id: string;
  text: string;
  user: Events_events_edges_node_subj_CommentEventBody_comment_post_user;
}

export interface Events_events_edges_node_subj_CommentEventBody_comment {
  _id: string;
  text: string;
  createdAt: any;
  user: Events_events_edges_node_subj_CommentEventBody_comment_user;
  post: Events_events_edges_node_subj_CommentEventBody_comment_post;
}

export interface Events_events_edges_node_subj_CommentEventBody {
  comment: Events_events_edges_node_subj_CommentEventBody_comment;
}

export interface Events_events_edges_node_subj_SubEventBody_sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface Events_events_edges_node_subj_SubEventBody_sub {
  _id: string;
  accepted: boolean;
  from: Events_events_edges_node_subj_SubEventBody_sub_from;
}

export interface Events_events_edges_node_subj_SubEventBody {
  sub: Events_events_edges_node_subj_SubEventBody_sub;
}

export type Events_events_edges_node_subj = Events_events_edges_node_subj_LikeEventBody | Events_events_edges_node_subj_CommentEventBody | Events_events_edges_node_subj_SubEventBody;

export interface Events_events_edges_node {
  _id: string;
  createdAt: any;
  kind: EventType;
  subj: Events_events_edges_node_subj;
}

export interface Events_events_edges {
  cursor: string;
  node: Events_events_edges_node;
}

export interface Events_events_pageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface Events_events {
  edges: Events_events_edges[];
  pageInfo: Events_events_pageInfo;
}

export interface Events {
  events: Events_events;
}

export interface EventsVariables {
  first: number;
  after?: string | null;
}
