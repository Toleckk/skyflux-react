/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: CommentUpdated
// ====================================================

export interface CommentUpdated_commentUpdated_Comment_post_user {
  _id: string;
}

export interface CommentUpdated_commentUpdated_Comment_post {
  user: CommentUpdated_commentUpdated_Comment_post_user;
}

export interface CommentUpdated_commentUpdated_Comment_user {
  _id: string;
  nickname: string;
  avatar: string | null;
}

export interface CommentUpdated_commentUpdated_Comment {
  _id: string;
  text: string;
  createdAt: any;
  post: CommentUpdated_commentUpdated_Comment_post;
  user: CommentUpdated_commentUpdated_Comment_user;
}

export interface CommentUpdated_commentUpdated_DeletedComment_post {
  _id: string;
  commentsCount: number;
}

export interface CommentUpdated_commentUpdated_DeletedComment {
  _id: string;
  deleted: boolean;
  post: CommentUpdated_commentUpdated_DeletedComment_post;
}

export type CommentUpdated_commentUpdated = CommentUpdated_commentUpdated_Comment | CommentUpdated_commentUpdated_DeletedComment;

export interface CommentUpdated {
  commentUpdated: CommentUpdated_commentUpdated;
}

export interface CommentUpdatedVariables {
  postId: string;
}
