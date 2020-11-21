/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
import * as Q from './queries'
import * as S from './subscriptions'

import {SubRequestUpdated} from './types/SubRequestUpdated'
import {Feed, FeedVariables} from './types/Feed'
import {Suggestions} from './types/Suggestions'

export * from './types/SubRequestUpdated'
export * from './types/Feed'
export * from './types/Suggestions'

export const SUB_REQUEST_UPDATED: TypedDocumentNode<SubRequestUpdated> =
  S.SUB_REQUEST_UPDATED
export const FEED: TypedDocumentNode<Feed, FeedVariables> = Q.FEED
export const SUGGESTIONS: TypedDocumentNode<Suggestions> = Q.SUGGESTIONS
