import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import {getMainDefinition} from '@apollo/client/utilities'
import {WebSocketLink} from '@apollo/client/link/ws'
import {setContext} from '@apollo/client/link/context'

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_API_URL.replace(/^http/, 'ws') + '/graphql',
  options: {
    reconnect: true,
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

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
})
