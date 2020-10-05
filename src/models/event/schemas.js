import {gql} from '@apollo/client'

export const MiniSubEventFragment = gql`
  fragment MiniSubEventFragment on SubEvent {
    kind
    subj {
      sub {
        accepted
        from {
          _id
          avatar
          nickname
        }
      }
    }
  }
`

export const MiniCommentEventFragment = gql`
  fragment MiniCommentEventFragment on CommentEvent {
    kind
    subj {
      comment {
        text
        user {
          avatar
          nickname
        }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query getEvents($first: Int, $after: ID) {
    getEvents(after: $after, first: $first) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...MiniCommentEventFragment
          ...MiniSubEventFragment
        }
      }
    }
  }
  ${MiniSubEventFragment}
  ${MiniCommentEventFragment}
`
