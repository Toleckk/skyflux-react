import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import {getMainDefinition, relayStylePagination} from '@apollo/client/utilities'
import {WebSocketLink} from '@apollo/client/link/ws'
import {setContext} from '@apollo/client/link/context'

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_API_URL.replace(/^http/, 'ws'),
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      const token = localStorage.getItem('token')

      return {
        authorization: token ? `Bearer ${token}` : '',
      }
    },
  },
})

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
})

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getFeed: relayStylePagination(false),
        getEvents: relayStylePagination(false),
        getPostsByNickname: relayStylePagination(['nickname']),
        getCommentsByPostId: relayStylePagination(['post_id']),
        getSubRequests: relayStylePagination(false),
        getFoundUsers: relayStylePagination(['text']),
        getFoundPosts: relayStylePagination(['text']),
      },
    },
  },
})

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache,
})

client.resetConnection = () => wsLink?.subscriptionClient?.client?.close?.()
