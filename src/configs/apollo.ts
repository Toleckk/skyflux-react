import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import {getMainDefinition, relayStylePagination} from '@apollo/client/utilities'
import {WebSocketLink} from '@apollo/client/link/ws'
import {setContext} from '@apollo/client/link/context'
import {authPromise, firebase} from '@skyflux/react/configs/firebase'

const wsLink = new WebSocketLink({
  uri: (process.env.REACT_APP_API_URL as string).replace(/^http/, 'ws'),
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: async () => {
      const token = await firebase.auth().currentUser?.getIdToken(true)

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

const authLink = setContext(async (_, {headers}) => {
  await authPromise
  const token = await firebase.auth().currentUser?.getIdToken(true)

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
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
client.resetConnection = () => wsLink?.subscriptionClient?.client?.close?.()
client.resetPersist = () =>
  Object.keys(localStorage)
    .filter(key => key.startsWith('PERSIST_'))
    .forEach(key => localStorage.removeItem(key))
