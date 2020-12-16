/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: FeedUpdated
// ====================================================

export interface FeedUpdated_feedUpdated_Post_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface FeedUpdated_feedUpdated_Post {
  _id: string;
  text: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  isLikedByMe: boolean;
  user: FeedUpdated_feedUpdated_Post_user;
}

export interface FeedUpdated_feedUpdated_DeletedPost {
  _id: string;
  deleted: boolean;
}

export type FeedUpdated_feedUpdated = FeedUpdated_feedUpdated_Post | FeedUpdated_feedUpdated_DeletedPost;

export interface FeedUpdated {
  feedUpdated: FeedUpdated_feedUpdated;
}
