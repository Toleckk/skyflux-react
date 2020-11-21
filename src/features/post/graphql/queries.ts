import {gql} from '@apollo/client'
import {
  COMMENT_CONNECTION_FRAGMENT,
  POST_FRAGMENT,
} from 'features/shared/graphql'

export const POST = gql`
    query Post($_id: ID!, $afterComment: ID, $firstComments: Int!) {
        post(_id: $_id) {
            ...PostFragment
            comments(first: $firstComments, after: $afterComment) {
                ...CommentConnectionFragment
            }
        }
        ${COMMENT_CONNECTION_FRAGMENT}
        ${POST_FRAGMENT}
    }
`
