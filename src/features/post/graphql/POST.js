import {gql} from '@apollo/client'
import {CommentConnectionFragment, PostFragment} from 'features/shared/graphql'

export const POST = gql`
    query Post($_id: ID!, $afterComment: ID, $firstComments: Int!) {
        post(_id: $_id) {
            ...PostFragment
            comments(first: $firstComments, after: $afterComment) {
                ...CommentConnectionFramgnet
            }
        }
        ${CommentConnectionFragment}
        ${PostFragment}
    }
`
