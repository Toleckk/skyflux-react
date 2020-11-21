/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType } from "./../../../../_types/globalTypes";

// ====================================================
// GraphQL fragment: EventFragment
// ====================================================

export interface EventFragment_subj_LikeEventBody_like_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventFragment_subj_LikeEventBody_like_post {
  _id: string;
  text: string;
}

export interface EventFragment_subj_LikeEventBody_like {
  _id: string;
  user: EventFragment_subj_LikeEventBody_like_user;
  post: EventFragment_subj_LikeEventBody_like_post;
}

export interface EventFragment_subj_LikeEventBody {
  like: EventFragment_subj_LikeEventBody_like;
}

export interface EventFragment_subj_CommentEventBody_comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventFragment_subj_CommentEventBody_comment_post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventFragment_subj_CommentEventBody_comment_post {
  _id: string;
  text: string;
  user: EventFragment_subj_CommentEventBody_comment_post_user;
}

export interface EventFragment_subj_CommentEventBody_comment {
  _id: string;
  text: string;
  createdAt: any;
  user: EventFragment_subj_CommentEventBody_comment_user;
  post: EventFragment_subj_CommentEventBody_comment_post;
}

export interface EventFragment_subj_CommentEventBody {
  comment: EventFragment_subj_CommentEventBody_comment;
}

export interface EventFragment_subj_SubEventBody_sub_from {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface EventFragment_subj_SubEventBody_sub {
  _id: string;
  accepted: boolean;
  from: EventFragment_subj_SubEventBody_sub_from;
}

export interface EventFragment_subj_SubEventBody {
  sub: EventFragment_subj_SubEventBody_sub;
}

export type EventFragment_subj = EventFragment_subj_LikeEventBody | EventFragment_subj_CommentEventBody | EventFragment_subj_SubEventBody;

export interface EventFragment {
  _id: string;
  createdAt: any;
  kind: EventType;
  subj: EventFragment_subj;
}
