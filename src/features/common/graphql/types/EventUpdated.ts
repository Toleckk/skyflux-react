/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType } from "./../../../../_types/globalTypes";

// ====================================================
// GraphQL subscription operation: EventUpdated
// ====================================================

export interface EventUpdated_eventUpdated_Event_subj_LikeEventBody_like_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventUpdated_eventUpdated_Event_subj_LikeEventBody_like_post {
  _id: string;
  text: string;
}

export interface EventUpdated_eventUpdated_Event_subj_LikeEventBody_like {
  _id: string;
  user: EventUpdated_eventUpdated_Event_subj_LikeEventBody_like_user;
  post: EventUpdated_eventUpdated_Event_subj_LikeEventBody_like_post;
}

export interface EventUpdated_eventUpdated_Event_subj_LikeEventBody {
  like: EventUpdated_eventUpdated_Event_subj_LikeEventBody_like;
}

export interface EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment_post {
  user: EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment_post_user;
  _id: string;
  text: string;
}

export interface EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment {
  _id: string;
  text: string;
  createdAt: any;
  post: EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment_post;
  user: EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment_user;
}

export interface EventUpdated_eventUpdated_Event_subj_CommentEventBody {
  comment: EventUpdated_eventUpdated_Event_subj_CommentEventBody_comment;
}

export interface EventUpdated_eventUpdated_Event_subj_SubEventBody_sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventUpdated_eventUpdated_Event_subj_SubEventBody_sub {
  _id: string;
  accepted: boolean;
  from: EventUpdated_eventUpdated_Event_subj_SubEventBody_sub_from;
}

export interface EventUpdated_eventUpdated_Event_subj_SubEventBody {
  sub: EventUpdated_eventUpdated_Event_subj_SubEventBody_sub;
}

export type EventUpdated_eventUpdated_Event_subj = EventUpdated_eventUpdated_Event_subj_LikeEventBody | EventUpdated_eventUpdated_Event_subj_CommentEventBody | EventUpdated_eventUpdated_Event_subj_SubEventBody;

export interface EventUpdated_eventUpdated_Event {
  _id: string;
  createdAt: any;
  kind: EventType;
  subj: EventUpdated_eventUpdated_Event_subj;
}

export interface EventUpdated_eventUpdated_DeletedEvent {
  _id: string;
  deleted: boolean;
}

export type EventUpdated_eventUpdated = EventUpdated_eventUpdated_Event | EventUpdated_eventUpdated_DeletedEvent;

export interface EventUpdated {
  eventUpdated: EventUpdated_eventUpdated;
}
