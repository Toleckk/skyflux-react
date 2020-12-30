/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType } from "./../../../../_types/globalTypes";

// ====================================================
// GraphQL fragment: MaybeEventFragment
// ====================================================

export interface MaybeEventFragment_Event_subj_LikeEventBody_like_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface MaybeEventFragment_Event_subj_LikeEventBody_like_post {
  _id: string;
  text: string;
}

export interface MaybeEventFragment_Event_subj_LikeEventBody_like {
  _id: string;
  user: MaybeEventFragment_Event_subj_LikeEventBody_like_user;
  post: MaybeEventFragment_Event_subj_LikeEventBody_like_post;
}

export interface MaybeEventFragment_Event_subj_LikeEventBody {
  like: MaybeEventFragment_Event_subj_LikeEventBody_like;
}

export interface MaybeEventFragment_Event_subj_CommentEventBody_comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface MaybeEventFragment_Event_subj_CommentEventBody_comment_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface MaybeEventFragment_Event_subj_CommentEventBody_comment_post {
  _id: string;
  text: string;
  user: MaybeEventFragment_Event_subj_CommentEventBody_comment_post_user;
}

export interface MaybeEventFragment_Event_subj_CommentEventBody_comment {
  _id: string;
  text: string;
  createdAt: any;
  user: MaybeEventFragment_Event_subj_CommentEventBody_comment_user;
  post: MaybeEventFragment_Event_subj_CommentEventBody_comment_post;
}

export interface MaybeEventFragment_Event_subj_CommentEventBody {
  comment: MaybeEventFragment_Event_subj_CommentEventBody_comment;
}

export interface MaybeEventFragment_Event_subj_SubEventBody_sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface MaybeEventFragment_Event_subj_SubEventBody_sub {
  _id: string;
  accepted: boolean;
  from: MaybeEventFragment_Event_subj_SubEventBody_sub_from;
}

export interface MaybeEventFragment_Event_subj_SubEventBody {
  sub: MaybeEventFragment_Event_subj_SubEventBody_sub;
}

export type MaybeEventFragment_Event_subj = MaybeEventFragment_Event_subj_LikeEventBody | MaybeEventFragment_Event_subj_CommentEventBody | MaybeEventFragment_Event_subj_SubEventBody;

export interface MaybeEventFragment_Event {
  _id: string;
  createdAt: any;
  kind: EventType;
  subj: MaybeEventFragment_Event_subj;
}

export interface MaybeEventFragment_DeletedEvent {
  _id: string;
  deleted: boolean;
}

export type MaybeEventFragment = MaybeEventFragment_Event | MaybeEventFragment_DeletedEvent;
