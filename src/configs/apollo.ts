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
  uri: (process.env.REACT_APP_API_URL as string).replace(/^http/, 'ws'),
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
        feed: relayStylePagination(false),
        events: relayStylePagination(false),
        subRequests: relayStylePagination(false),
        users: relayStylePagination(['query']),
        posts: relayStylePagination(['query']),
      },
    },
    Post: {
      fields: {
        comments: relayStylePagination(false),
      },
    },
    User: {
      fields: {
        posts: relayStylePagination(false),
      },
    },
  },
})

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache,
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
client.resetConnection = () => wsLink?.subscriptionClient?.client?.close?.()
client.resetPersist = () =>
  Object.keys(localStorage)
    .filter(key => key.startsWith('PERSIST_'))
    .forEach(key => localStorage.removeItem(key))
