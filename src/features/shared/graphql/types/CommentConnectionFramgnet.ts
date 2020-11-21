/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentConnectionFramgnet
// ====================================================

export interface CommentConnectionFramgnet_edges_node_user {
  __typename: 'User'
  _id: string
  nickname: string
  avatar: string | null
}

export interface CommentConnectionFramgnet_edges_node {
  __typename: 'Comment'
  _id: string
  text: string
  createdAt: any
  user: CommentConnectionFramgnet_edges_node_user
}

export interface CommentConnectionFramgnet_edges {
  __typename: 'CommentEdge'
  cursor: string
  node: CommentConnectionFramgnet_edges_node
}

export interface CommentConnectionFramgnet_pageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  endCursor: string | null
}

export interface CommentConnectionFramgnet {
  __typename: 'CommentConnection'
  edges: (CommentConnectionFramgnet_edges | null)[]
  pageInfo: CommentConnectionFramgnet_pageInfo
}
