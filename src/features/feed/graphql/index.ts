/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
import * as Q from './queries'
import * as S from './subscriptions'

import {FeedUpdated} from './types/FeedUpdated'
import {Feed, FeedVariables} from './types/Feed'
import {Suggestions} from './types/Suggestions'

export * from './types/FeedUpdated'
export * from './types/Feed'
export * from './types/Suggestions'

export const FEED_UPDATED: TypedDocumentNode<FeedUpdated> = S.FEED_UPDATED
export const FEED: TypedDocumentNode<Feed, FeedVariables> = Q.FEED
export const SUGGESTIONS: TypedDocumentNode<Suggestions> = Q.SUGGESTIONS
